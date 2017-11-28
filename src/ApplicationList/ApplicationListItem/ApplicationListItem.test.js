import { ApplicationListItem } from "../../lib";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Router>
    <ApplicationListItem />
  </Router>, div);

  ReactDOM.render(<Router>
    <ApplicationListItem label="demo" link="/" />
  </Router>, div);
});
