import React from "react";
import reducers from "./../reducers";

import Login from "./../../Login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import * as actions from "./../actions";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

//import sagaHelper from "redux-saga-testing";
const initialState = {
  data: {
    email: undefined,
    password: undefined,
  },

  token: undefined,
  inProgress: false,
  error: false,
};
const mockStore = configureStore();
let store;

describe("Check if Render login", () => {
  store = mockStore(initialState);
  const loginRenderFix = render(
    <Provider store={store}>
      <Login />
    </Provider>
  );

  loginRenderFix.getByText("Inicia Sesión con tu email");
});

////

describe("login reducers", () => {
  test(`should return the initial state`, () => {
    expect(reducers(initialState, {})).toEqual(initialState);
  });
});
describe("login reducers", () => {
  test(`should return the initial state`, () => {
    expect(
      reducers(initialState, {
        type: actions.GET_TOKEN,
        payload: {
          data: {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          },

          token: undefined,
          inProgress: false,
          error: false,
        },
      })
    ).toEqual({
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      },

      token: undefined,
      inProgress: false,
      error: false,
    });
  });
});
