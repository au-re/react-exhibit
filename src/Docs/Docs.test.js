import { Docs } from "../lib";
import React from "react";
import ReactDOM from "react-dom";

const params = [
  {
    "type": {
      "names": [
        "string"
      ]
    },
    "description": "name of the component to be demoed",
    "name": "label"
  }
];

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<Docs />, div);
  ReactDOM.render(<Docs
    label="Demo"
    description="I'm in a Showcase!"
    params={params} />, div);
});
