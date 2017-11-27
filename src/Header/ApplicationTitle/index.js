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
    const { title, onClick } = this.props;

    return (
      <div className="ReactExhibit__ApplicationTitle" onClick={onClick}>
        <span className="ApplicationTitle__MenuIcon">=</span>
        <span className="ApplicationTitle__Description">{title}</span>
      </div>);
  }
}
