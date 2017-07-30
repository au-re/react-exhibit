import "./ListItem.css";

import { Link, Route } from "react-router-dom";

import React from "react";

/**
 * An Item to be displayed in the list of components. It stays active when it's
 * path matches the url.
 *
 * @export
 * @param {string} [label] - name of the component
 * @param {string} [link] - link to the component page
 * @returns {object} - ListItem
 */
const ListItem = ({ label, link }) => (
  <Route path={link} exact={true} children={({ match }) => (
    <Link className={match ? "ComponentList__Item ComponentList__Item--Selected" : "ComponentList__Item"} to={link || ""}>
      {label}
    </Link>
  )} />);

export default ListItem;
