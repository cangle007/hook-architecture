import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../redux/reducers/heroReducer";
import mainReducer from "../redux/reducers/mainReducer";

const rootReducer = {
  hero: heroReducer,
  main: mainReducer,
};

export const setupStore = () => configureStore({ reducer: rootReducer });

// The store now has redux-thunk added and the Redux DevTools Extension is turned on

// import {createStore, applyMiddleware, compose} from 'redux';
// import mainReducer from './reducers/mainReducer';
// import thunkMiddleware from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));

// export default function setupStore() {
//   return createStore(mainReducer, enhancers);
// }
