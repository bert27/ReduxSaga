import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

const nameButton = "test";
const mockHandler = jest.fn();
const buttonComponent = render(
  <Button onClick={mockHandler} text={nameButton} />
);

const buttondiv = buttonComponent.getByText(nameButton);

test("Check if Buttons clicks and callback onClick exits", () => {
  fireEvent.click(buttondiv);

  expect(mockHandler).toHaveBeenCalledTimes(1);
});

test("check that load width controller works fine", () => {
  expect(buttondiv).toHaveStyle("width: 5vw");
});
