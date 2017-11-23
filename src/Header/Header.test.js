import { Header } from "../lib";
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter as Router } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <Router>
      <Header />
    </Router>, div);

  ReactDOM.render(
    <Router>
      <Header label="Exhibit" url="TEST" />
    </Router>, div);
});
