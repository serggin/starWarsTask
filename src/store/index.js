import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import filmReducer from './filmReducer';

const rootReducer = combineReducers({films: filmReducer});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
