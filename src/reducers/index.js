import {
  ADD_ENTRY_SUCCEEDED,
  SET_CURRENT_USER,
  SIGNUP_FAILED,
  SIGNIN_FAILED,
  TIMELOG_FETCH_SUCCEEDED,
} from 'src/constants/actionTypes';

const initialState = {
  currentUser: null,
  loggedHours: {},
  signUpError: '',
  signInError: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.user };
    case ADD_ENTRY_SUCCEEDED:
      return {
        ...state,
        loggedHours: {
          ...state.loggedHours,
          [action.payload.date]: action.payload.hours,
        },
      };
    case TIMELOG_FETCH_SUCCEEDED:
      return { ...state, loggedHours: action.payload.data };
    case SIGNUP_FAILED:
      return { ...state, signUpError: action.payload.errorMsg };
    case SIGNIN_FAILED:
      return { ...state, signInError: action.payload.errorMsg };
    default:
      return state;
  }
};

export default reducer;
