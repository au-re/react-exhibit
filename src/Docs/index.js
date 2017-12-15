import "./Docs.css";

import { ContentTile, ContentTileHeader } from "../lib";

import React from "react";

/**
 * A table to display a components parameters. Returns an empty div if no
 * parameters are passed.
 *
 * @param {array} [params] - the parameters to pass to the component
 * @returns {object} - the parameter table or an empty div
 */
const ParamTable = ({ params }) => {
  if (!params || params.length === 0) return (<div></div>);

  const paramRows = params.map((param, idx) => (
    <tr key={idx}>
      <td>{param.name}</td>
      <td>{param.type.names[0]}</td>
      <td>{param.optional ? "true" : "false"}</td>
      <td>{param.defaultvalue === undefined ? "" : param.defaultvalue + ""}</td>
      <td>{param.description}</td>
    </tr>));

  return (
    <div className="Docs__TableWrapper">
      <table className="Docs__Table">
        <tbody>
          <tr className="Docs__Table__Labels">
            <th>Name</th>
            <th>Type</th>
            <th>Optional</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
          {paramRows}
        </tbody>
      </table>
    </div>);
};

/**
 * A Container to showcase component properties, can currently only render one
 * type per property.
 *
 * @export
 * @param {string} [label] - name of the component to be demoed
 * @param {string} [description] - description of the component to be demoed
 * @param {array} [params] - parameter (props) of the component
 * @returns {object} - Component Docs
 */
const Docs = ({ label, description, params }) => (
  <ContentTile label={label}>
    {description && <p>{description}</p>}
    {
      params &&
      <div className="ReactExhibit__Docs">
        <ContentTileHeader label="Properties" />
        <ParamTable params={params} />
      </div>
    }
  </ContentTile>);

export default Docs;
