import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import userReducer from "./domains/user/Reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [
  /* YOUR CUSTOM MIDDLEWARES HERE */
];

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middleware))
);

export default store;
