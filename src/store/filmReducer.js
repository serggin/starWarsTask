import ActionTypes from './ActionTypes';

const filmReducer = (state = {
  error: false,
  filmTitles: {},
  filmDetails: {},
  filmId: undefined,
}, action) => {
  switch(action.type) {
    case ActionTypes.START_TITLES:
      return {...state, error: false};
    case ActionTypes.SET_ERROR:
      return {...state, error: action.error};
    case ActionTypes.SET_TITLES:
      return {...state, filmTitles: action.films};
    default:
      return state;
  }
}

export default filmReducer;
