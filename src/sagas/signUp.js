import { call, put } from 'redux-saga/effects';

import { user } from 'src/firebase/api';
import { createUser } from 'src/firebase/auth';

import { signUpSuccess, signUpFailure } from 'src/actions';

function* signUp(action) {
  const { email, password } = action.payload;

  try {
    const { user: { uid } } = yield call(createUser, email, password);

    yield call(user, uid, email);
    yield put(signUpSuccess());
  } catch ({ message }) {
    yield call(alert, message);
    yield put(signUpFailure(message));
  }
}

export default signUp;
