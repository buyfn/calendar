import * as types from '../constants/actionTypes';

export const updateInput = (name, value) => ({
  type: types.UPDATE_INPUT,
  payload: { name, value },
});

export const setCurrentUser = user => ({
  type: types.SET_CURRENT_USER,
  payload: { user },
});
