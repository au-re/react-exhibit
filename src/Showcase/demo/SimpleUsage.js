import React from "react";
import { Showcase } from "../../index";

const demo = (<div>I'm in a showcase!</div>)
const source = "(<div>I'm in a showcase!</div>)";

export default () => (
  <Showcase
    demo={demo}
    source={source} />);