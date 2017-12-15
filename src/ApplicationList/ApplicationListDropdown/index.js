import "./ApplicationListDropdown.css";

import { Link, Route } from "react-router-dom";
import React, { Component } from "react";

/**
 * Dropdown in the for the sidebar
 *
 * @class ApplicationListDropdown
 * @extends {Component}
 */
class ApplicationListDropdown extends Component {

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
   * toggle the dropdown open/close
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
    const { children, label, link = "" } = this.props;
    const { open } = this.state;

    return (
      <Route path={link} exact={true} children={({ match }) => (
        <div className="ReactExhibit__ApplicationListDropdown">
          <Link to={link} onClick={(e) => open && e.preventDefault()}>
            <div
              className={`ApplicationListDropdown__Label ${open ? "ApplicationListDropdown__Label--Active" : ""}`}
              onClick={this.toggleDropdown}>
              <span>{label}</span>
              <span className="ApplicationListDropdown__Icon">{open ? "▲" : "▼"}</span>
            </div>
          </Link>
          {open && children}
        </div>)} />);
  }
}

/**
 *  Wrapper function: on first render, set to open if paths match
 *
 * @param {any} props - { children, label, link = "" }
 * @return {object}
 */
const Wrapper = ({ children, label, link = "" }) => (
  <Route path={link} exact={true} children={({ match }) => (
    <ApplicationListDropdown open={match} label={label} link={link}>
      {children}
    </ApplicationListDropdown>)} />);

export { Wrapper as ApplicationListDropdown };
