import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";
import { store } from "../../store/index";

function* getAll({ data }) {
    let token = store.getState().PROFILE.userSession.data;
    const headers = { Authorization: `Bearer ${token}`};

    const { response, error } = yield call(api.getAll, headers);
    
    if (response && response.data.status === 'success'){
        yield put(Actions.getAllSuccess(response.data));
    } else {
        yield put(Actions.getAllFailed(error.response));
    }

}

function* watchGetAll() {
    yield takeLatest(Actions.GET_ALL, getAll);
}

export default function* submit() {
    yield all([fork(watchGetAll)]);
}
