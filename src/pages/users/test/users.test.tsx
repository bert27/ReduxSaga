import React from "react";
import { render } from "@testing-library/react";
import Usercard from "./../UserCard";

const item = {
  id: "loading",
};

it("Check if Render card", () => {
  const card = render(<Usercard key={1} item={item} />);
  card.getByTestId("Card");
});
