import {
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {
  TIMELOG_FETCH_REQUESTED,
  ADD_ENTRY_REQUESTED,
  SIGNOUT_REQUESTED,
  SIGNUP_REQUESTED,
  SIGNIN_REQUESTED,
} from 'src/constants/actionTypes';

import addEntry from './addEntry';
import fetchTimelog from './timelog';
import login from './login';
import logout from './logout';
import signUp from './signUp';

function* saga() {
  yield takeLatest(TIMELOG_FETCH_REQUESTED, fetchTimelog);
  yield takeEvery(ADD_ENTRY_REQUESTED, addEntry);
  yield takeLatest(SIGNOUT_REQUESTED, logout);
  yield takeLatest(SIGNUP_REQUESTED, signUp);
  yield takeLatest(SIGNIN_REQUESTED, login);
}

export default saga;
