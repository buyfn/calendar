import {
  call,
  put,
} from 'redux-saga/effects';

import { timeEntry } from 'src/firebase/api';

import {
  addEntrySuccess,
  addEntryFailure,
} from 'src/actions';

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

export default addEntry;
