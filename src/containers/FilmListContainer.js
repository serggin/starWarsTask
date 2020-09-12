import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import {fetchFilms as fetchFilmsApi} from '../api';
import ActionCreators from '../store/Actions';
import FilmList from '../components/FilmList';

const fetchFilms = (dispatch) => {
  ActionCreators.fetchFilmsStarted(dispatch)();
  return (
    fetchFilmsApi()
      .then(filmsResponse => {
        const filmTitles = filmsResponse.results.reduce((acc, cur, idx) => {
          return {...acc, [(idx+1).toString()] : cur.title};
        }, {});
        ActionCreators.fetchFilmsComplete(dispatch)(filmTitles);
      })
      .catch(error => {
        console.error(error);
        ActionCreators.setError(dispatch)(error);
      })
  );
}

const FilmListWrapper = ({filmTitles, reviewMode, error, fetchFilms, setCurrentFilm}) => {
  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <FilmList titles={filmTitles} disabled={!!reviewMode} error={error.message} selectFilm={setCurrentFilm}/>
  );
};

const mapStateToProps = (state) => ({
  filmTitles: state.films.filmTitles,
  reviewMode: state.films.reviewMode,
  error: state.films.error,
});
const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(fetchFilms),
  setCurrentFilm: dispatch(ActionCreators.setCurrentFilm),
});

const FilmListContainer = connect(mapStateToProps, mapDispatchToProps)(FilmListWrapper);

export default React.memo(FilmListContainer);
