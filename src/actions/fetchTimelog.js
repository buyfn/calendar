import {
  TIMELOG_FETCH_REQUESTED,
  TIMELOG_FETCH_SUCCEEDED,
  TIMELOG_FETCH_FAILED,
} from '../constants/actionTypes';

export const fetchTimelogRequest = uid => ({
  type: TIMELOG_FETCH_REQUESTED,
  payload: { uid },
});

export const fetchTimelogSuccess = data => ({
  type: TIMELOG_FETCH_SUCCEEDED,
  payload: { data },
});

export const fetchTimelogFailure = errorMsg => ({
  type: TIMELOG_FETCH_FAILED,
  payload: { errorMsg },
});
