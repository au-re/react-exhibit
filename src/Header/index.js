import "./Header.css";

import React from "react";

export default ({ label, children }) => (
  <div className="Header">
    <a className="Header__Label" href="/Readme">{label}</a>
  </div>);