import "./ContentTile.css";

import React from "react";

/**
 * A header for a content tile
 *
 * @export
 * @param {string} [label] - title of the header
 * @param {boolean} [main] - if true, its the primary header
 * @return {object} - Content Tile
 */
const ContentTileHeader = ({ label, main = false }) =>
  (<div className={`ContentTile__Header${main ? "--Main" : ""}`}>
    <div className="ContentTile__Title">{label}</div>
  </div>);

/**
 * A tile for wrapping content
 *
 * @export
 * @param {string} [label] - label of the tile
 * @return {object} - Content Tile
 */
const ContentTile = ({ label, children, className = "", ...props }) =>
  (<div className={`ReactExhibit__ContentTile ${className}`} {...props}>
    {label && <ContentTileHeader main label={label} />}
    <div className="ContentTile__Content">
      {children}
    </div>
  </div>);

export default ContentTile;
export { ContentTileHeader };
