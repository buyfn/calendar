import { SET_CURRENT_USER, UPDATE_INPUT } from '../constants/actionTypes';

const initialState = {
  currentUser: null,
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
    default:
      return state;
  }
};

export default reducer;
