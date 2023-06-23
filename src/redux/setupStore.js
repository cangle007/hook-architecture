import {createStore, applyMiddleware, compose} from 'redux';
import heroReducer from './reducers/heroReducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));

export default function setupStore() {
  return createStore(heroReducer, enhancers);
}
