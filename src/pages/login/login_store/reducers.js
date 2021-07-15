import * as actions from "./actions";
export const initial = {
  data: {
    email: undefined,
    password: undefined,
  },

  token: undefined,
  inProgress: false,
  error: false,
};

function LoginReducer(state = initial, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_TOKEN:
      return {
        ...state,
        ...action.payload,
      };

    case actions.GET_TOKEN_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case actions.GET_TOKEN_FAIL:
      return {
        ...state,
        data: {
          inProgress: false,
          error: payload,
        },
      };
    case actions.CLOSE_SESION:
      return {
        ...state,
        data: {
          user: undefined,
          password: undefined,
        },
      };
    default:
      return state;
  }
}
export default LoginReducer;
