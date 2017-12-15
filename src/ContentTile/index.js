import "./ContentTile.css";

import React from "react";

/**
 * A header for a content tile
 *
 * @export
 * @return {object} - Content Tile
 */
const ContentTileHeader = ({ label }) =>
  (<div className="ContentTile__Header">
    <div className="ContentTile__Title">{label}</div>
  </div>);

/**
 * A tile for wrapping content
 *
 * @export
 * @return {object} - Content Tile
 */
const ContentTile = ({ label, children, ...props }) =>
  (<div className="ReactExhibit__ContentTile" {...props}>
    {label && <ContentTileHeader label={label} />}
    <div className="ContentTile__Content">
      {children}
    </div>
  </div>);

export default ContentTile;
export { ContentTileHeader };
