import React from "react";
import reducers from "./../reducers";
import Login from "./../../Login";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const initialState = {
  data: {
    user: undefined,
    password: undefined,
  },
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

describe("signup reducers", () => {
  test("should return the initial state", () => {
    expect(reducers(undefined, {})).toEqual(initialState);
  });
});
