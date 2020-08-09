import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

function* login({ data }) {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("password", data.password);

  const { response, error } = yield call(api.login, formData);

  if (response && response.data.status === "success") {
    yield put(Actions.loginSuccess(response.data));
    // update user sesssion
    yield put(Actions.activateUserSession(response.data));
  }
  if (error) {
    yield put(Actions.loginFail(error));
  }
}

function* watchLogin() {
  yield takeLatest(Actions.LOGIN, login);
}

export default function* submit() {
  yield all([fork(watchLogin)]);
}
