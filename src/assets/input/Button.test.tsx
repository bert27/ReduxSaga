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

test("Check if disable ok", () => {
  const buttonComponentDisable = render(
    <Button onClick={mockHandler} text={nameButton} disable={true} />
  );
  const buttondivDisable = buttonComponentDisable.getByText(nameButton);
  expect(buttondivDisable).toHaveStyle("background: #9e9e9e");
});

test("Check if button change big ok", () => {
  const buttonComponentBig = render(
    <Button onClick={mockHandler} text={nameButton} big={true} />
  );
  const buttonBig = buttonComponentBig.getByText(nameButton);
  expect(buttonBig).toHaveStyle("width: 200px");
});
