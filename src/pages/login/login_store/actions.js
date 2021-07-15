export const GET_TOKEN = "GET_TOKEN";
export const getToken = (data) => ({
  type: GET_TOKEN,
  payload: {
    data,
  },
});

export const GET_TOKEN_SUCCESS = `${GET_TOKEN}_SUCCESS`;
export const getLoginSuccess = (data) => ({
  type: GET_TOKEN_SUCCESS,
  payload: {
    token: data,
  },
});

export const GET_TOKEN_FAIL = `${GET_TOKEN}_FAIL`;
export const getLoginFail = (error) => ({
  type: GET_TOKEN_FAIL,
  payload: error,
});
export const CLOSE_SESION = "CLOSE_SESION";
export const closeSesion = (data) => ({
  type: CLOSE_SESION,
  payload: data,
});
