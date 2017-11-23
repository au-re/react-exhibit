import { Icon } from "../lib";
import React from "react";
import ReactDOM from "react-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Icon />, div);
});
