import {
  SET_CURRENT_USER,
} from '../constants/actionTypes';

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: { user },
});

export default setCurrentUser;
