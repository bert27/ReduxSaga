import * as actions from "./actions";
const initial = {
  data: {
    user: undefined,
    password: undefined,
  },
};

function LoginReducer(state = initial, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_TOKEN:
      return {
        ...state,
        data: {
          data: payload,
        },
      };
    case actions.GET_TOKEN_SUCCESS:
      return {
        data: {
          inProgress: false,
          data: payload,
        },
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
