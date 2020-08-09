import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";
import { store } from "../../store/index";

function* getCompleted({ data }) {
    let token = store.getState().PROFILE.userSession.data;
    const headers = { Authorization: `Bearer ${token}`};

    const { response, error } = yield call(api.getCompleted, headers);
    console.log( response , error );

    if (response){
        yield put(Actions.getCompletedSuccess(response.data));
    } else {
        yield put(Actions.getCompletedFailed(error));
    }

}

function* watchGetCompleted() {
    yield takeLatest(Actions.GET_COMPLETED, getCompleted);
}

export default function* submit() {
    yield all([fork(watchGetCompleted)]);
}
