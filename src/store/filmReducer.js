import ActionTypes from './ActionTypes';

const filmReducer = (state = {
  error: false,
  filmTitles: {},
  filmDetails: {},
  filmId: undefined,
  reviewMode: false,
}, action) => {
  switch(action.type) {
    case ActionTypes.START_TITLES:
      return {...state, error: false};
    case ActionTypes.SET_ERROR:
      return {...state, error: action.error};
    case ActionTypes.SET_TITLES:
      return {...state, filmTitles: action.films};
    case ActionTypes.SET_CURRENT_FILM:
      return {...state, filmId: action.id};
    case ActionTypes.START_FILM_DETAILS:
      return {...state, error: false, filmDetails: {...state.filmDetails, [action.id.toString()]: {loading: true}}};
    case ActionTypes.SET_FILM_DETAILS:
      return {...state, filmDetails: {...state.filmDetails, [action.id.toString()]: {...action.details}}};
    case ActionTypes.SET_REVIEW_MODE:
      return {...state, reviewMode: action.mode};
    case ActionTypes.CLEAR_REVIEW_MODE:
      return {...state, reviewMode: false};
    default:
      return state;
  }
}

export default filmReducer;
