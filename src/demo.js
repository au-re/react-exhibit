import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import { PrismCode } from 'react-prism';
import React from "react";
import ReactDOM from "react-dom";

/* FETCH THE DEMO DATA */

// .../MySubComponent/${stop}/... -> 'MySubComponent'
function extractComponentName(path, stop) {
  const pathSplit = path.split("/");
  return pathSplit[pathSplit.indexOf(stop) - 1];
}

// only render documentation that was made by the developer
function filterDocs(docs) {
  return docs.filter((doc) => doc.comment);
}

/**
 * Go through the entire ./src folder, load all demos from the `demo` folders
 * If a `demo` folder was present also load the JSDOC documentation of the
 * component. Creates an object for each component and add to it:
 *
 * 1. the demos
 * 2. the raw code of the demos
 * 3. the JSDOC infos from the component `index.js`
 *
 * Nested components will also be handled properly.
 * If you don't want a component to be demoed, simply don't add a `demo` folder
 * to it.
 *
 * @returns {object} - object with values to be rendered in the docs
 */
function requireAllDemos() {
  const components = {};
  const demoSources = require.context(`!!raw-loader!./`, true, /demo\/.*\.js$/);
  const demos = require.context(`./`, true, /demo\/.*\.js$/);
  const docs = require.context(`!!raw-loader!jsdoc2js-loader!./`, true, /.*[^.]\/index.js/);

  demos.keys().forEach((key) => {
    const name = extractComponentName(key, "demo");
    if (!components[name]) {
      components[name] = { source: [], demo: [] }
    }
    components[name].source.push(demoSources(key));
    components[name].demo.push(demos(key));
  });

  docs.keys().forEach((key) => {
    const name = extractComponentName(key, "index.js");
    if (components[name]) {
      components[name].docs = filterDocs(docs(key));
    }
  });

  return components;
}

/* RENDER THE DEMO DATA */

const ComponentListItem = ({ label, link, activeOnlyWhenExact }) => (
  <Route path={link} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={link}>
      <div>
        {label}
      </div>
    </Link>
  )} />
);

function DemoPage(props) {
  return (
    <div style={{ height: "500px" }}>
      <h1>{props.name}</h1>
      <h3>{props.description}</h3>
      <pre>
        <PrismCode className="language-jsx">
          {props.source}
        </PrismCode>
      </pre>
      <div style={{ height: "500px" }}>
        {props.demo}
      </div>
    </div>)
}

function DemoRouter(props) {
  const elements = [];
  const routes = [];

  for (const demo in props.data) {
    elements.push(<ComponentListItem link={`/${demo}`} label={demo} key={demo} />);
    routes.push(<Route
      path={`/${demo}`}
      component={() => (
        <DemoPage
          name={props.data[demo].docs[0].name}
          description={props.data[demo].docs[0].description}
          source={props.data[demo].source[0]}
          demo={props.data[demo].demo[0].default()}
        />
      )}
      key={demo} />);
  }

  return (
    <Router>
      <div>
        <div>
          {elements}
        </div>
        <div style={{ height: "500px" }}>
          {routes}
        </div>
      </div>
    </Router>);
}

ReactDOM.render(<DemoRouter data={requireAllDemos()} />, document.getElementById("root"));