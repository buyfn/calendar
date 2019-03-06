import * as types from '../constants/actionTypes';

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: { user },
});

export const signOutRequest = () => ({
  type: types.SIGNOUT_REQUESTED,
});

export const signOutSuccess = () => ({
  type: types.SIGNOUT_SUCCEEDED,
});

export const signOutFailure = errorMsg => ({
  type: types.SIGNOUT_FAILED,
  payload: { msg: errorMsg },
});

export const signInRequest = (email, password) => ({
  type: types.SIGNIN_REQUESTED,
  payload: { email, password },
});

export const signUpRequest = (email, password) => ({
  type: types.SIGNUP_REQUESTED,
  payload: { email, password },
});

export const signUpSuccess = () => ({
  type: types.SIGNUP_SUCCEEDED,
});

export const signUpFailed = () => ({
  type: types.SIGNUP_FAILED,
});

export const addEntryRequest = (uid, date, hours) => ({
  type: types.ADD_ENTRY_REQUESTED,
  payload: { uid, date, hours },
});

export const addEntrySuccess = (date, hours) => ({
  type: types.ADD_ENTRY_SUCCEEDED,
  payload: { date, hours },
});

export const addEntryFailure = errorMsg => ({
  type: types.ADD_ENTRY_FAILED,
  payload: { msg: errorMsg },
});

export const fetchTimelogRequest = uid => ({
  type: types.TIMELOG_FETCH_REQUESTED,
  payload: { uid },
});

export const fetchTimelogSuccess = data => ({
  type: types.TIMELOG_FETCH_SUCCEEDED,
  payload: { data },
});

export const fetchTimelogFailure = errorMsg => ({
  type: types.TIMELOG_FETCH_FAILED,
  payload: { msg: errorMsg },
});
