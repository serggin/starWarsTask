import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {fetchFilm as fetchFilmApi} from '../api';
import ActionCreators from '../store/Actions';
import FilmDetail from '../components/FilmDetail';

const fetchFilm = (dispatch, getState) => {
  const films = getState().films;
  let filmId = films.filmId
  const filmDetails = films.filmDetails;
  console.log('fetchFilm filmId, filmDetails=', filmId, filmDetails);
  if (filmId) {
    filmId = filmId.toString();
    if (filmDetails[filmId] && (filmDetails[filmId].loading || filmDetails[filmId].opening_crawl)) { // не делаем повторную загрузку
      console.log('skip loading ', filmId);
      return;
    }
    ActionCreators.fetchFilmDetailsStarted(dispatch)(filmId);
    fetchFilmApi(filmId)
      .then(filmResponse => {
        const details = {opening_crawl: filmResponse.opening_crawl};
        ActionCreators.fetchFilmDetailsComplete(dispatch)(filmId, details);
      })
      .catch(error => {
        ActionCreators.setError(dispatch)(error);
      })
  }
  //return null;
  return;
}

const FilmDetailWrapper = ({filmId, filmTitles, filmDetails, reviewMode, fetchFilm, setReviewMode, clearReviewMode}) => {
  useEffect(() => {
    fetchFilm();
  }, [filmId]);
  let props = {filmId, reviewMode, setReviewMode, clearReviewMode};
  if (filmId) {
    const details = filmDetails[filmId];
    if (details) {
      props = {
        ...props,
        ...(details.loading ?
          {loading: true} :
          {title: filmTitles[filmId], opening_crawl: details.opening_crawl})
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
  reviewMode: state.films.reviewMode,
});
const mapDispatchToProps = (dispatch) => ({
  fetchFilm: () => dispatch(fetchFilm),
  setReviewMode: dispatch(ActionCreators.setReviewMode),
  clearReviewMode: dispatch(ActionCreators.clearReviewMode),
});

const FilmDetailContainer = connect(mapStateToProps, mapDispatchToProps)(FilmDetailWrapper);

export default FilmDetailContainer;
