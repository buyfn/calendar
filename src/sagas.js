import {
  call,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import { loggedTime, timeEntry, user } from 'src/firebase/api';
import { signOut, signIn, createUser } from 'src/firebase/auth';
import {
  TIMELOG_FETCH_REQUESTED,
  ADD_ENTRY_REQUESTED,
  SIGNOUT_REQUESTED,
  SIGNUP_REQUESTED,
  SIGNIN_REQUESTED,
} from 'src/constants/actionTypes';
import {
  addEntrySuccess,
  addEntryFailure,
  fetchTimelogSuccess,
  fetchTimelogFailure,
} from 'src/actions';

function* fetchTimelog(action) {
  try {
    const data = yield call(loggedTime, action.payload.uid);
    yield put(fetchTimelogSuccess(data.val() || {}));
  } catch ({ message }) {
    yield put(fetchTimelogFailure({ message }));
  }
}

function* addEntry(action) {
  const { uid, date, hours } = action.payload;

  try {
    yield call(timeEntry, uid, date, hours);
    yield put(addEntrySuccess(date, hours));
  } catch ({ message }) {
    yield call(alert, message);
    yield put(addEntryFailure({ message }));
  }
}

function* logout() {
  try {
    yield call(signOut);
  } catch ({ message }) {
    yield call(alert, message);
  }
}

function* signUp(action) {
  const { email, password } = action.payload;

  try {
    const { user: { uid } } = yield call(createUser, email, password);
    yield call(user, uid, email);
  } catch ({ message }) {
    yield call(alert, message);
  }
}

function* login(action) {
  const { email, password } = action.payload;

  try {
    yield call(signIn, email, password);
  } catch ({ message }) {
    yield call(alert, message);
  }
}

function* saga() {
  yield takeLatest(TIMELOG_FETCH_REQUESTED, fetchTimelog);
  yield takeEvery(ADD_ENTRY_REQUESTED, addEntry);
  yield takeLatest(SIGNOUT_REQUESTED, logout);
  yield takeLatest(SIGNUP_REQUESTED, signUp);
  yield takeLatest(SIGNIN_REQUESTED, login);
}

export default saga;
