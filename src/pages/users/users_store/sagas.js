import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "./actions";
import { apiCall } from "services/helper";
import { all } from "redux-saga/effects";

function* fetchUsers(action) {
  const { actualpage } = action.payload;
  try {
    const results = yield call(
      apiCall,
      "get",
      "https://reqres.in/api/users?page=" + actualpage
    );
    yield put(actions.getUsersSuccess(results));
  } catch (error) {
    yield put(actions.getUsersFail(error));
  }
}

function* getDataSaga() {
  yield all([takeLatest(actions.GET_USERS, fetchUsers)]);
}

export default function* sagaUsers() {
  yield all([getDataSaga()]);
}
