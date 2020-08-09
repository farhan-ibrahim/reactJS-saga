import { all, fork } from "redux-saga/effects";

import auth from "./auth";
import task from "./task";

export default function* submit() {
  yield all([fork(auth), fork(task)]);
}
