import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {fetchFilm as fetchFilmApi} from '../api';
import ActionCreators from '../store/Actions';
import FilmDetail from '../components/FilmDetail';

const fetchFilm = (dispatch, getState) => {
  const films = getState().films;
  const filmId = films.filmId;
  const filmDetails = films.filmDetails;
  if (filmId) {
    if (filmDetails[filmId] && filmDetails[filmId].loading) {
      return;
    }
    ActionCreators.fetchFilmDetailsStarted(dispatch)(filmId);
    fetchFilmApi(filmId)
      .then(filmResponse => {
        const details = {episode_id: filmResponse.episode_id, opening_crawl: filmResponse.opening_crawl};
        ActionCreators.fetchFilmDetailsComplete(dispatch)(filmId, details);
      })
      .catch(error => {
        ActionCreators.setError(dispatch)(error);
      })
  }
  //return null;
  return;
}

const FilmDetailWrapper = ({filmId, filmTitles, filmDetails, fetchFilm}) => {
  useEffect(() => {
    fetchFilm();
  }, [filmId]);
  let props = {filmId};
  if (filmId) {
    const details = filmDetails[filmId];
    if (details) {
      props = {
        ...props,
        ...(details.loading ?
          {loading: true} :
          {title: filmTitles[filmId], episode_id: details.episode_id, opening_crawl: details.opening_crawl})
      };
    }
  }
  return(
    <FilmDetail {...props}/>
  );
}

const mapStateToProps = (state) => ({
  filmId: state.films.filmId,
  filmTitles: state.films.filmTitles,
  filmDetails: state.films.filmDetails,
});
const mapDispatchToProps = (dispatch) => ({
  fetchFilm: () => dispatch(fetchFilm),
});

const FilmDetailContainer = connect(mapStateToProps, mapDispatchToProps)(FilmDetailWrapper);

export default FilmDetailContainer;
