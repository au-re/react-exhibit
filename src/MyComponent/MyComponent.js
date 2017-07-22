import './MyComponent.css';

import React from 'react';

/**
 * A demo component
 *
 * @param {object} props
 * @param {string} props.X - a value to be passed
 * @returns {object} MyComponent
 */
function MyComponent(props) {
  return (<div className="MyComponent">
    <div className="MyComponent-header">
      <img src={"https://raw.githubusercontent.com/au-re/exhibit/gh-pages/media/exhibit.png"} className="MyComponent-logo" alt="logo" />
      <h2>Welcome to React Exhibit</h2>
    </div>
    <p className="MyComponent-intro">
      To get started, edit <code>src/MyComponent/MyComponent.js</code> and save to reload.
    </p>
  </div>);
}

export default MyComponent;
