export const GET_USERS = "GET_USERS";
export const getUsers = (page) => ({
  type: GET_USERS,
  payload: {
    actualpage: page,
  },
});

export const GET_USERS_SUCCESS = `${GET_USERS}_SUCCESS`;
export const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

export const GET_USERS_FAIL = `${GET_USERS}_FAIL`;
export const getUsersFail = (error) => ({
  type: GET_USERS_FAIL,
  payload: error,
});
