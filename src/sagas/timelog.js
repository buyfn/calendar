import {
  call,
  put,
} from 'redux-saga/effects';

import { loggedTime } from 'src/firebase/api';

import {
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

export default fetchTimelog;
