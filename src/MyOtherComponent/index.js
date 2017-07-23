import './MyOtherComponent.css';

import React from 'react';

/**
 * Another demo component
 *
 * @param {object} props
 * @param {string} props.X - a value to be passed
 * @returns {object} MyOtherComponent
 */
function MyOtherComponent(props) {
  return (<div className="MyOtherComponent">
    <div className="MyOtherComponent-header">
      <img src={"https://raw.githubusercontent.com/au-re/exhibit/gh-pages/media/exhibit.png"} className="MyOtherComponent-logo" alt="logo" />
      <h2>Another Component Demo</h2>
    </div>
  </div>);
}

export default MyOtherComponent;
