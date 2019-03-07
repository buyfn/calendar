import { call, put } from 'redux-saga/effects';

import { signIn } from 'src/firebase/auth';

import { signInSuccess, signInFailure } from 'src/actions';

function* login(action) {
  const { email, password } = action.payload;

  try {
    yield call(signIn, email, password);
    yield put(signInSuccess());
  } catch ({ message }) {
    yield call(alert, message);
    yield put(signInFailure(message));
  }
}

export default login;
