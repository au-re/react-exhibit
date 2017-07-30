import "./List.css";

import React from "react";

/**
 * A container to store the component links. Can be activated and deactivated.
 *
 * @export
 * @param {boolean} [active] - should the list be rendered or not
 * @param {string} [label] - a title for the list
 * @return {object} - the component List
 */
const List = ({ label, active, children }) => (
  <div className={active ? "ComponentList ComponentList--hidden" : "ComponentList"}>
    <div className="ComponentList__Header">
      <h2 className="ComponentList__Label">{label}</h2>
    </div>
    {children}
  </div>);

export default List;
