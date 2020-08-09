import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";
import { store } from "../../store/index";

function* deleteTask( {data} ) {
    let token = store.getState().PROFILE.userSession.data.token;
    const headers = { Authorization: `Bearer ${token}`};

    const { response, error } = yield call(api.deleteTask, data, headers);
    console.log( response , error );

    if (response && response.data.status === "Success"){
        yield put(Actions.deleteTaskSuccess(response.data));
        yield put(Actions.getAll());
    } else {
        if (error) {
            yield put(Actions.deleteTaskFailed(error.response));
        }
    }
}

function* watchDeleteTask() {
    yield takeLatest(Actions.DELETE_TASK, deleteTask);
}

export default function* submit() {
    yield all([fork(watchDeleteTask)]);
}
