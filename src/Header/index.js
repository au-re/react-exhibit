import "./Header.css";

import { Link } from "react-router-dom";
import React from "react";

/**
 * A simple header with a label that links to "/"
 *
 * @export
 * @param {string} label - label to be displayed on the header
 * @return {object} - Header
 */
const Header = ({ label, children }) => (
  <div className="Header">
    <Link className="Header__Label" to="/"> {label} </Link>
  </div>);

export default Header;
