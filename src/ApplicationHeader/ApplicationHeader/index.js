import "./ApplicationHeader.css";

import React, { Component } from "react";

/**
 * A sub header
 *
 * @class ApplicationHeader
 * @extends {Component}
 */
export class ApplicationHeader extends Component {

  /**
   * Render the ApplicationHeader Component
   *
   * @return {object} ApplicationHeader
   * @memberof ApplicationHeader
   */
  render() {
    const { children, light, collapsed, onClick } = this.props;

    const headerClass = light
      ? "ApplicationHeader--Light"
      : "ApplicationHeader--Dark";

    return (
      <div className={`ReactExhibit__ApplicationHeader ${headerClass}`}>
        <div className="ApplicationHeader__MenuIcon" onClick={onClick}>
          {collapsed ? "x" : "="}
        </div>
        <span className={`ApplicationHeader__Content ${collapsed ? "ApplicationHeader__Content--Collapsed" : ""}`}>
          {children}
        </span>
      </div>);
  }
}
