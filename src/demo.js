import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import MyComponentDemo from "./MyComponent/MyComponent.demo";
import { PrismCode } from 'react-prism';
import React from "react";
import ReactDOM from "react-dom";

const MyComponentDemoSource = require("!!raw-loader!./MyComponent/MyComponent.demo");

const demos = {
  MyComponentDemo
}

const ComponentListItem = ({ label, link, activeOnlyWhenExact }) => (
  <Route path={link} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={link}>
      <div className={match ? "Showcase-link Showcase-link-selected" : "Showcase-link"}>
        {label}
      </div>
    </Link>
  )} />
);

function splitString(str) {
  return str.replace("Demo", "").replace(/([A-Z])/g, " $1").trim();
}

function DemoPage(props) {
  const elements = [];
  const routes = [];

  for (const demo in demos) {
    elements.push(<ComponentListItem link={`/${demo}`} label={splitString(demo)} key={demo} />);
    routes.push(<Route path={`/${demo}`} component={demos[demo]} key={demo} />);
  }

  return (
    <Router>
      <div>
        <div>
          {elements}
        </div>
        <div style={{ height: "500px" }}>
          <pre>
            <PrismCode className="language-jsx">
              {MyComponentDemoSource}
            </PrismCode>
          </pre>
          {routes}
        </div>
      </div>
    </Router>);
}

ReactDOM.render(<DemoPage />, document.getElementById("root"));