import { createStore, applyMiddleware, combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import { logger } from "redux-logger";
import reducer from "./user/UserReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootreducer = combineReducers({
  cake: cakeReducer,
  user: reducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
