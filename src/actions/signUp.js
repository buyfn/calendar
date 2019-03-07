import {
  SIGNUP_REQUESTED,
  SIGNUP_SUCCEEDED,
  SIGNUP_FAILED,
} from '../constants/actionTypes';

export const signUpRequest = (email, password) => ({
  type: SIGNUP_REQUESTED,
  payload: { email, password },
});

export const signUpSuccess = () => ({
  type: SIGNUP_SUCCEEDED,
});

export const signUpFailure = errorMsg => ({
  type: SIGNUP_FAILED,
  payload: { errorMsg },
});
