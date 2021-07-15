import * as actions from "pages/login/login_store/actions";

describe("UserList actions", () => {
  test("Users / GET_TOKEN", () => {
    const expectedAction = {
      type: actions.GET_TOKEN,
      payload: {
        data: "query",
      },
    };
    expect(actions.getToken("query")).toEqual(expectedAction);
  });

  test("Users / GET_TOKEN_SUCCESS", () => {
    const expectedAction = {
      type: actions.GET_TOKEN_SUCCESS,
      payload: {
        token: "query",
      },
    };
    expect(actions.getLoginSuccess("query")).toEqual(expectedAction);
  });

  test("Users / GET_TOKEN_FAIL", () => {
    const expectedAction = {
      type: actions.GET_TOKEN_FAIL,
      payload: "query",
    };
    expect(actions.getLoginFail("query")).toEqual(expectedAction);
  });

  test("Users / CLOSE_SESION", () => {
    const expectedAction = {
      type: actions.CLOSE_SESION,
      payload: "query",
    };
    expect(actions.closeSesion("query")).toEqual(expectedAction);
  });
});
