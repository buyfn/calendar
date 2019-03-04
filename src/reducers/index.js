import {
  ADD_ENTRY,
  SET_CURRENT_USER,
  SET_LOGGED_TIME,
} from 'src/constants/actionTypes';

const initialState = {
  currentUser: null,
  loggedHours: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.user };
    case ADD_ENTRY:
      return {
        ...state,
        loggedHours: {
          ...state.loggedHours,
          [action.payload.date]: action.payload.hours,
        },
      };
    case SET_LOGGED_TIME:
      return { ...state, loggedHours: action.payload.data };
    default:
      return state;
  }
};

export default reducer;
