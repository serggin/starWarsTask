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
        console.log('filmTitles = ', filmTitles);
        ActionCreators.fetchFilmsComplete(dispatch)(filmTitles);
      })
      .catch(error => {
        ActionCreators.setError(dispatch)(error);
      })
  );
}

const FilmListWrapper = ({filmTitles, fetchFilms}) => {
  useEffect(() => {
    fetchFilms();
  }, []);
  console.log('FilmListWrapper filmTitles=', filmTitles);
  return (
    <FilmList titles={filmTitles}/>
  );
};

const mapStateToProps = (state) => ({filmTitles: state.films.filmTitles});
const mapDispatchToProps = (dispatch) => ({
  fetchFilms: () => dispatch(fetchFilms),

});

const FilmListContainer = connect(mapStateToProps, mapDispatchToProps)(FilmListWrapper);

export default React.memo(FilmListContainer);
