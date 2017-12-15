import "./ApplicationTitle.css";

import React, { Component } from "react";

import { Link } from "react-router-dom";

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
    const { title, children } = this.props;

    return (
      <span className="ReactExhibit__ApplicationTitle">
        {title || children}
      </span>);
  }
}
