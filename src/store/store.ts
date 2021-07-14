import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import sagaUsers from "pages/users/users_store/sagas";
import sagaLogin from "pages/login/login_store/sagas";
import userListReducer from "pages/users/users_store/reducers";
import LoginReducer from "pages/login/login_store/reducers";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return combineReducers({
    users: userListReducer,
    login: LoginReducer
  })(state, action);
};
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagaUsers);
sagaMiddleware.run(sagaLogin);

export default store;
