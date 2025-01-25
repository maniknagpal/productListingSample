// reducers/authReducer.js
import {LOGIN, LOGOUT} from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null, // Add token to the initial state
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user, // Store user information
        token: action.payload.token, // Store token
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null, // Clear token on logout
      };
    default:
      return state;
  }
};

export default authReducers;
