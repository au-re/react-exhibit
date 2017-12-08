import "./ContentTile.css";

import React from "react";

/**
 * A tile for wrapping content
 *
 * @return {object} - Content Tile
 */
const ContentTile = ({ label, children }) =>
  (<div className="ReactExhibit__ContentTile">
    <div className="ContentTile__Header">
      <div className="ContentTile__Title">{label}</div>
    </div>
    <div className="ContentTile__Content">
      {children}
    </div>
  </div>);

export default ContentTile;
