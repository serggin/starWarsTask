import ActionTypes from './ActionTypes';

const ActionCreators = {
  setError: (error) => ({
    type: ActionTypes.SET_ERROR,
    error,
  }),
  fetchFilmsStarted: () => ({
    type: ActionTypes.START_TITLES,
  }),
  fetchFilmsComplete: (films) => ({
    type: ActionTypes.SET_TITLES,
    films,
  }),
  setCurrentFilm: (id) => ({
    type: ActionTypes.SET_CURRENT_FILM,
    id,
  }),
  fetchFilmDetailsStarted: (id) => ({
    type: ActionTypes.START_FILM_DETAILS,
    id,
  }),
  fetchFilmDetailsComplete: (id, details) => ({
    type: ActionTypes.SET_FILM_DETAILS,
    id,
    details,
  }),
  setReviewMode: (mode) => ({
    type: ActionTypes.SET_REVIEW_MODE,
    mode,
  }),
  clearReviewMode: () => ({
    type: ActionTypes.CLEAR_REVIEW_MODE,
  }),
};

const ActionTriggers = {
  setError: (dispatch) => (error) => dispatch(ActionCreators.setError(error)),
  fetchFilmsStarted: (dispatch) => () => dispatch(ActionCreators.fetchFilmsStarted()),
  fetchFilmsComplete: (dispatch) => (films) => dispatch(ActionCreators.fetchFilmsComplete(films)),
  setCurrentFilm: (dispatch) => (id) => dispatch(ActionCreators.setCurrentFilm(id)),
  fetchFilmDetailsStarted: (dispatch) => (id) => dispatch(ActionCreators.fetchFilmDetailsStarted(id)),
  fetchFilmDetailsComplete: (dispatch) => (id, details) => dispatch(ActionCreators.fetchFilmDetailsComplete(id, details)),
  setReviewMode: (dispatch) => (mode) => dispatch(ActionCreators.setReviewMode(mode)),
  clearReviewMode: (dispatch) => () => dispatch(ActionCreators.clearReviewMode()),
}

export default ActionTriggers;
