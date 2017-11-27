import "./Header.css";

import React, { Component } from "react";

/**
 * Simple header component
 *
 * @class Header
 * @extends {Component}
 */
class Header extends Component {

  /**
   * Render the Header Component
   *
   * @return {object} Header
   * @memberof Header
   */
  render() {
    const { children, sub, bright } = this.props;

    const headerClass = sub && bright
      ? "Header--ApplicationBright"
      : sub
        ? "Header--ApplicationDark"
        : "";

    return (
      <div className={`ReactExhibit__Header ${headerClass}`}>
        <div className="Header__Banner">
          {children}
        </div>
      </div>);
  }
}

export default Header;
export { HeaderTitle } from "./HeaderTitle";
export { ApplicationTitle } from "./ApplicationTitle";
