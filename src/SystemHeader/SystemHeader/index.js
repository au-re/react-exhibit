import "./SystemHeader.css";

import React, { Component } from "react";

/**
 * System Header - header with system wide information such as user menu,
 * communication, ...
 *
 * @export
 * @class SystemHeader
 * @extends {Component}
 */
export class SystemHeader extends Component {

  /**
   * Render the SystemHeader Component
   *
   * @return {object} SystemHeader
   * @memberof SystemHeader
   */
  render() {
    const { children } = this.props;

    return (
      <div className="ReactExhibit__Header">
        <div className="Header__Banner">
          {children}
        </div>
      </div>);
  }
}
