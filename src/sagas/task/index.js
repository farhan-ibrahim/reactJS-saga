import { all, fork } from "redux-saga/effects";
import getAll from "./getAll";
import getCompleted from "./getCompleted";
import create from "./create";
import deleteTask from "./deleteTask";
import update from "./update";

export default function* home() {
  yield all([fork(getAll), fork(getCompleted), fork(create), fork(deleteTask), fork(update)]);
}

