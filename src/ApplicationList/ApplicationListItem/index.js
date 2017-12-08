import "./ApplicationListItem.css";

import { Link, Route } from "react-router-dom";

import React from "react";

/**
 * An Item to be displayed in the list of components. It stays active when it's
 * path matches the url.
 *
 * @export
 * @param {string} [label] - name of the component
 * @param {string} [link] - link to the component page
 * @returns {object} - ApplicationListItem
 */
export const ApplicationListItem = ({ label, link, onClick }) => link
  ? (<Route path={link} exact={true} children={({ match }) => (
    <Link onClick={onClick} className={
      match
        ? "ReactExhibit__ApplicationListItem ApplicationListItem--Selected"
        : "ReactExhibit__ApplicationListItem"} to={link}>
      <span className="ApplicationListItem__Label">{label}</span>
    </Link>
  )} />)
  : (<div className="ReactExhibit__ApplicationListItem">
    <span className="ApplicationListItem__Label">{label}</span>
  </div>);
