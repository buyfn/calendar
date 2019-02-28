import * as types from '../constants/actionTypes';

export const updateInput = (name, value) => ({
  type: types.UPDATE_INPUT,
  payload: { name, value },
});

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: { user },
});

export const addEntry = (date, hours) => ({
  type: types.ADD_ENTRY,
  payload: { date, hours },
});

export const setLoggedTime = data => ({
  type: types.SET_LOGGED_TIME,
  payload: { data },
});
