import "./ApplicationListDropdown.css";

import React, { Component } from "react";

/**
 * Dropdown in the for the sidebar
 *
 * @class ApplicationListDropdown
 * @extends {Component}
 */
export class ApplicationListDropdown extends Component {

  /**
   * Creates an instance of ApplicationListDropdown.
   * @param {any} props
   * @memberof ApplicationListDropdown
   */
  constructor(props) {
    super();
    this.state = {
      open: props.open
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  /**
   * toggle the dropdown open and close
   *
   * @memberof ApplicationListDropdown
   */
  toggleDropdown() {
    this.setState({ open: !this.state.open });
  }

  /**
   * Render the ApplicationListDropdown Component
   *
   * @return {object} ApplicationListDropdown
   * @memberof ApplicationListDropdown
   */
  render() {
    const { children, label } = this.props;
    const { open } = this.state;

    return (
      <div className="ReactExhibit__ApplicationListDropdown" onClick={this.toggleDropdown}>
        <div className="ApplicationListDropdown__Label">
          <span>{label}</span>
          <span className="ApplicationListDropdown__Icon">{open ? "▲" : "▼"}</span>
        </div>
        {open && children}
      </div>);
  }
}
