import "./Header.css";

import React, { Component } from "react";

/**
 * System Header
 *
 * @class SystemHeader
 * @extends {Component}
 */
class SystemHeader extends Component {

  /**
   * Render the SystemHeader Component
   *
   * @return {object} SystemHeader
   * @memberof SystemHeader
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

export default SystemHeader;
