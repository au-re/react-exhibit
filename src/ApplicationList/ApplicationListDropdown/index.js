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
   * only close the dropdown if the current page matches the dropdown link
   *
   * @param {boolean} match - true if the link of the dropdown matches the current page
   * @memberof ApplicationListDropdown
   */
  toggleDropdown(match) {
    this.setState({ open: !(match && this.state.open) });
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
      <Route path={link} children={({ match }) => (
        <div className={`ReactExhibit__ApplicationListDropdown
          ${open ? "ApplicationListDropdown--Open" : ""}
          ${match ? "ApplicationListDropdown--Active" : ""}`}>
          <Link to={link} onClick={(e) => open && match && e.preventDefault()}>
            <div
              className="ApplicationListDropdown__Label"
              onClick={(e) => this.toggleDropdown(match)}>
              <span>{label}</span>
              <span className="ApplicationListDropdown__Icon">
                {open
                  ? <i className="fa fa-chevron-up" aria-hidden="true"></i>
                  : <i className="fa fa-chevron-down" aria-hidden="true"></i>}
              </span>
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
