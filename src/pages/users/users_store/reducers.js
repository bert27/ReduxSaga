import * as actions from "./actions";
const initial = {
  users: {
    data: [],
    inProgress: false,
    total_pages: 1,
    page: 1,
    error: false,
  },
};

function userListReducer(state = initial, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          inProgress: true,
        },
      };
    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          inProgress: false,
          data: payload.data,
          total_pages: payload.total_pages,
          page: payload.page,
        },
      };
    case actions.GET_USERS_FAIL:
      return {
        ...state,
        users: {
          ...state.users,
          inProgress: false,
          error: payload,
        },
      };
    default:
      return state;
  }
}
export default userListReducer;
