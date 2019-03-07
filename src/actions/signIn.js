import {
  SIGNIN_REQUESTED,
  SIGNIN_SUCCEEDED,
  SIGNIN_FAILED,
} from '../constants/actionTypes';

export const signInRequest = (email, password) => ({
  type: SIGNIN_REQUESTED,
  payload: { email, password },
});

export const signInSuccess = () => ({
  type: SIGNIN_SUCCEEDED,
});

export const signInFailure = errorMsg => ({
  type: SIGNIN_FAILED,
  payload: { errorMsg },
});
