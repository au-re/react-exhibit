import "./HeaderTitle.css";

import React, { Component } from "react";

import icon from "./logo.svg";

/**
 * Header Title Component
 *
 * @class HeaderTitle
 * @extends {Component}
 */
export class HeaderTitle extends Component {

  /**
   * Render the Header component
   *
   * @returns {object}
   * @memberof HeaderTitle
   */
  render() {
    const { href, title, src, alt = "" } = this.props;

    return (
      <a href={href} className="ReactExhibit__HeaderTitle">
        <img className="HeaderTitle__Image" src={src ? src : icon} alt={alt} />
        <span className="HeaderTitle__Description">{title}</span>
      </a>);
  }
}
