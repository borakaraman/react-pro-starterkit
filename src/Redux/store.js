import { applyMiddleware, compose, createStore } from "redux";
import { thunk } from "redux-thunk";

import monitorReducersEnhancer from "./monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./combineReducers";

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}