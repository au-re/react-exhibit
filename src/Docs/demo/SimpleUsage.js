import { Docs } from "../../index";
import React from "react";

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

export default () => (
  <Docs
    label="Demo"
    description="I'm in a Showcase!"
    params={params} />);
