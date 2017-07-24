import "./demo.css";

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
    <Link style={{ textDecoration: "none" }} to={link}>
      <div className={match ? "ComponentListItem Selected" : "ComponentListItem"}>
        {label.replace(/([A-Z])/g, " $1").trim()}
      </div>
    </Link>
  )} />
);

function DemoPage(props) {
  const sources = props.source.map((source, idx) => (
    <div className="Sources">
      <div className="Showcase">
        {props.demo[idx].default()}
      </div>
      <div className="Code">
        <pre>
          <PrismCode className="language-jsx">
            {source}
          </PrismCode>
        </pre>
      </div>
    </div>
  ));

  const docs = props.docs.map((doc) => (
    <div className="Docs">
      <h1>{doc.name}</h1>
      <p>{doc.description}</p>
    </div>));


  return (
    <div className="DemoArea">
      {docs}
      {sources}
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
          docs={props.data[demo].docs}
          source={props.data[demo].source}
          demo={props.data[demo].demo}
        />
      )}
      key={demo} />);
  }

  return (
    <Router>
      <div className="Demo">
        <div className="Header"><h3>Exhibit</h3></div>
        <div className="ComponentDemos">
          {routes}
        </div>
        <div className="ComponentList">
          <h1 className="ComponentListHeader">Components</h1>
          {elements}
        </div>
      </div>
    </Router>);
}

ReactDOM.render(<DemoRouter data={requireAllDemos()} />, document.getElementById("root"));