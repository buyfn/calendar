import {
  ADD_ENTRY,
  SET_CURRENT_USER,
  UPDATE_INPUT,
} from '../constants/actionTypes';

const initialState = {
  currentUser: null,
  loggedHours: [],
  selectedDate: null,
  hoursInput: '',
  signUpEmail: '',
  signUpPassword: '',
  loginEmail: '',
  loginPassword: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload.user };
    case UPDATE_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };
    case ADD_ENTRY:
      return { ...state, loggedHours: [...state.loggedHours, action.payload] };
    default:
      return state;
  }
};

export default reducer;
