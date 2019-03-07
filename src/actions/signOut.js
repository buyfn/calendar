import {
  SIGNOUT_REQUESTED,
  SIGNOUT_SUCCEEDED,
  SIGNOUT_FAILED,
} from '../constants/actionTypes';

export const signOutRequest = () => ({
  type: SIGNOUT_REQUESTED,
});

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCEEDED,
});

export const signOutFailure = errorMsg => ({
  type: SIGNOUT_FAILED,
  payload: { errorMsg },
});
