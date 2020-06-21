import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all, spawn } from "redux-saga/effects";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  view: (state = {}) => state,
});

const sagaMiddleware = createSagaMiddleware({
  context: {},
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(function* () {
  yield all([].map((saga) => spawn(saga)));
});

export default store;
