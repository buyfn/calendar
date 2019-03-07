import { call, put } from 'redux-saga/effects';

import { signOut } from 'src/firebase/auth';

import { signOutSuccess, signOutFailure } from 'src/actions';

function* logout() {
  try {
    yield call(signOut);
    yield put(signOutSuccess());
  } catch ({ message }) {
    yield call(alert, message);
    yield put(signOutFailure(message));
  }
}

export default logout;
