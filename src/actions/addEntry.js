import {
  ADD_ENTRY_REQUESTED,
  ADD_ENTRY_SUCCEEDED,
  ADD_ENTRY_FAILED,
} from '../constants/actionTypes';

export const addEntryRequest = (uid, date, hours) => ({
  type: ADD_ENTRY_REQUESTED,
  payload: { uid, date, hours },
});

export const addEntrySuccess = (date, hours) => ({
  type: ADD_ENTRY_SUCCEEDED,
  payload: { date, hours },
});

export const addEntryFailure = errorMsg => ({
  type: ADD_ENTRY_FAILED,
  payload: { errorMsg },
});
