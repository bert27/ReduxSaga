import * as actions from "pages/users/users_store/actions";

describe("UserList actions", () => {
  test("Users / GET_USERS", () => {
    const expectedAction = {
      type: actions.GET_USERS,
      payload: {
        actualpage: "query",
      },
    };
    expect(actions.getUsers("query")).toEqual(expectedAction);
  });

  test("Users / GET_USERS_SUCCESS", () => {
    const expectedAction = {
      type: actions.GET_USERS_SUCCESS,
      payload: "query",
    };
    expect(actions.getUsersSuccess("query")).toEqual(expectedAction);
  });

  test("Users / GET_USERS_FAIL", () => {
    const expectedAction = {
      type: actions.GET_USERS_FAIL,
      payload: "query",
    };
    expect(actions.getUsersFail("query")).toEqual(expectedAction);
  });
});
