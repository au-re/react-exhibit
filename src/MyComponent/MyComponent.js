import './MyComponent.css';

import React from 'react';
import logo from './logo.svg';

function MyComponent() {
  return (<div className="MyComponent">
    <div className="MyComponent-header">
      <img src={logo} className="MyComponent-logo" alt="logo" />
      <h2>Welcome to Exhibit</h2>
    </div>
    <p className="MyComponent-intro">
      To get started, edit <code>src/MyComponent/MyComponent.js</code> and save to reload.
    </p>
  </div>);
}

export default MyComponent;
