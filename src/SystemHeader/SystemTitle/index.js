import "./SystemTitle.css";

import React, { Component } from "react";

/**
 * Title for the System Header
 *
 * @class SystemTitle
 * @extends {Component}
 */
export class SystemTitle extends Component {

  /**
   * Render the SystemTitle component
   *
   * @returns {object}
   * @memberof SystemTitle
   */
  render() {
    const { href, title, src, alt = "" } = this.props;

    return (
      <a href={href} className="ReactExhibit__SystemTitle">
        {src && <img className="SystemTitle__Image" src={src} alt={alt} />}
        <span className="SystemTitle__Description">{title}</span>
      </a>);
  }
}
