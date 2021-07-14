import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { apiPost } from "services/helper";
import { all } from "redux-saga/effects";

function* getToken(action) {
  const { data } = action.payload;

  try {
    const results = yield call(
      apiPost,
      "post",
      data,
      "https://reqres.in/api/login"
    );
    const resultString = JSON.stringify(results.token);
    localStorage.setItem("authToken", resultString);
    yield put(actions.getLoginSuccess(resultString));
  } catch (error) {
    yield put(actions.getLoginFail(error));
  }
}

function* getDataSaga() {
  yield all([takeLatest(actions.GET_TOKEN, getToken)]);
}

export default function* sagaUsers() {
  yield all([getDataSaga()]);
}
