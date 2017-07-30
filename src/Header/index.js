import "./Header.css";

import { Link } from "react-router-dom";
import React from "react";

/**
 * A simple header with a label
 *
 * @export
 * @param {string} [label] - label to be displayed on the header
 * @param {string} [url=process.env.PUBLIC_URL + "/"] - the url the header label links to
 * @return {object} - Header
 */
const Header = ({ label, children, url=`${process.env.PUBLIC_URL}/` }) => (
  <div className="Header">
    <Link
      className="Header__Label"
      to={url}>
      {label}
    </Link>
  </div>);

export default Header;
