import * as actions from "pages/login/login_store/actions";

describe("Login actions", () => {
  test("Login / GET_TOKEN", () => {
    const expectedAction = {
      type: actions.GET_TOKEN,
      payload: {
        data: "query",
      },
    };
    expect(actions.getToken("query")).toEqual(expectedAction);
  });

  test("Login / GET_TOKEN_SUCCESS", () => {
    const expectedAction = {
      type: actions.GET_TOKEN_SUCCESS,
      payload: {
        token: "query",
      },
    };
    expect(actions.getLoginSuccess("query")).toEqual(expectedAction);
  });

  test("Login / GET_TOKEN_FAIL", () => {
    const expectedAction = {
      type: actions.GET_TOKEN_FAIL,
      payload: "query",
    };
    expect(actions.getLoginFail("query")).toEqual(expectedAction);
  });

  test("Login / CLOSE_SESION", () => {
    const expectedAction = {
      type: actions.CLOSE_SESION,
    };
    expect(actions.closeSesion()).toEqual(expectedAction);
  });
});
