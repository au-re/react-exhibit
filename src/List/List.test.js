import { List, ListItem } from "../index";

import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<List />, div);

  ReactDOM.render(
    <Router>
      <List label="test">
        <ListItem />
        <ListItem />
      </List>
    </Router>, div);
});