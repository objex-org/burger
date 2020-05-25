import { takeEvery } from 'redux-saga/effects';

import { logoutSaga, checkTokenTimeoutSaga, authenticateUserSaga, autoSigninSaga } from './auth';
import { fetchOrdersSaga, postOrderSaga } from "./order";

import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkTokenTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_INITIATE, authenticateUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, autoSigninSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
    yield takeEvery(actionTypes.POST_ORDER, postOrderSaga);
}