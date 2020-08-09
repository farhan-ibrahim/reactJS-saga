import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";
import { store } from "../../store/index";

function* update({ data }) {
    console.log(data);
    console.log(data.title);
    let token = store.getState().PROFILE.userSession.data.token;
    const headers = { Authorization: `Bearer ${token}`};

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("dateline", data.dateline);
    formData.append("status", data.status);
    console.log("this is form",formData);

    const { response, error } = yield call(api.update, data.id,formData, headers);
    console.log( response , error );

    if (response && response.data.status === "Success"){
        yield put(Actions.updateSuccess(response.data));
        yield put(Actions.getAll());
    } else {
        if (error) {
            yield put(Actions.updateFailed(error.response));
        }
    }
}

function* watchUpdate() {
    yield takeLatest(Actions.UPDATE, update);
}

export default function* submit() {
    yield all([fork(watchUpdate)]);
}
