import "./Icon.css";

import React from "react";

/**
 * The Exhibit logo with some animations, for demoing the boilerplate
 *
 * @export
 * @return {object} - Exhibit Icon
 */
const Icon = () =>
  (<div className="Exhibit__Icon__Box Box--Outer">
    <div className="Exhibit__Icon__Box Box--Inner"></div>
    <div className="Exhibit__Icon__Circle Circle--Top"></div>
  </div>);

export default Icon;
