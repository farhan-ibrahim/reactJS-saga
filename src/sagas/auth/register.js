import { takeLatest, call, all, fork, put } from "redux-saga/effects";
import Actions from "../../actions";
import * as api from "../../api";

function* register({ data }) {
    console.log("saga data", data)
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);

    const { response, error } = yield call(api.register, formData);
    console.log( response , error );

    if (response && response.data.status === "success") {
        yield put(Actions.registerSuccess(response.data));
        // const loginInfo = {
        //      timestamp: new Date().valueOf(),
        //      userId: response.data.data.userId,
        //      token: response.data.data.xToken
        // };
        
        // yield put(
        //      Actions.activateUserSession({ xToken: encode(JSON.stringify(loginInfo)) })
        // );
    } else {
        yield put(Actions.registerFailed(error));
    }
}

function* watchRegister() {
    yield takeLatest(Actions.REGISTER, register);
}

export default function* submit() {
    yield all([fork(watchRegister)]);
}
