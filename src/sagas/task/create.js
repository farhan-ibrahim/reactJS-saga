import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";
import { store } from "../../store/index";

function* create({ data }) {
    let token = store.getState().PROFILE.userSession.data.token;
    const headers = { Authorization: `Bearer ${token}`};

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("dateline", data.dateline);
    // console.log("this is form",formData);

    const { response, error } = yield call(api.create, formData, headers);
    console.log( response , error );

    if (response && response.data.status === "success"){
        yield put(Actions.createSuccess(response.data));
        yield put(Actions.getAll());
    }
    if (error){
        yield put(Actions.createFailed(error.response));
    }
}

function* watchCreate() {
    yield takeLatest(Actions.CREATE, create);
}

export default function* submit() {
    yield all([fork(watchCreate)]);
}
