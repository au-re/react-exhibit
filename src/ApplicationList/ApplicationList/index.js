import "./ApplicationList.css";

import React, { Component } from "react";

/**
 * Sidebar, list of menu items
 *
 * @class ApplicationList
 * @extends {Component}
 */
export class ApplicationList extends Component {

  /**
   * Render the ApplicationList Component
   *
   * @return {object} ApplicationList
   * @memberof ApplicationList
   */
  render() {
    const { children } = this.props;

    return (
      <div className="ReactExhibit__ApplicationList">
        {children}
      </div>);
  }
}
