const { REGISTER_USER_LOAD, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_LOAD, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } = require("../ActionTypes/AuthActionTypes");


const initialState = {
  user: null,
  loadUser: false,
  success: null,
  errors: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER_LOAD:
      return { ...state, loadUser: true };

    case REGISTER_USER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        user: payload.newUser,
        loadUser: false,
        success: payload.success,
        isAuth: true,
      };

    case REGISTER_USER_FAIL:
      return { ...state, load: false, errors: payload.error, success: null };

    case LOGIN_USER_LOAD:
      return { ...state, loadUser: true };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload.foundUser,
        loadUser: false,
        success: payload.success,
        isAuth: true,
      };

    case LOGIN_USER_FAIL:
      return { ...state, load: false, errors: payload.error, success: null };

    default:
      return state;
  }
};


export default AuthReducer;