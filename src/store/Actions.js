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
};

const ActionTriggers = {
  setError: (dispatch) => (error) => dispatch(ActionCreators.setError(error)),
  fetchFilmsStarted: (dispatch) => () => dispatch(ActionCreators.fetchFilmsStarted()),
  fetchFilmsComplete: (dispatch) => (films) => dispatch(ActionCreators.fetchFilmsComplete(films)),
}

export default ActionTriggers;
