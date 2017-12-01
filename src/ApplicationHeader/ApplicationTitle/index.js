import "./ApplicationTitle.css";

import React, { Component } from "react";

/**
 * Application Title Component
 *
 * @class ApplicationTitle
 * @extends {Component}
 */
export class ApplicationTitle extends Component {

  /**
   * Render the ApplicationTitle component
   *
   * @returns {object}
   * @memberof ApplicationTitle
   */
  render() {
    const { title } = this.props;

    return (
      <span className="ReactExhibit__ApplicationTitle">
        {title}
      </span>);
  }
}
