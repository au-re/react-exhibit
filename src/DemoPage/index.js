import "./DemoPage.css";

import { Docs, Header, List, ListItem, Showcase } from "../index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";

/**
 * Page containing the documentation and showcases
 *
 * @param {object} props - { docs, sources, demos }
 * @returns {object} - The showcases and docs for a component
 */
function DemoPage({ name, docs, sources, demos }) {

  const componentDocs = docs.map((doc, idx) => (
    <Docs
      key={idx}
      label={doc.name}
      description={doc.description}
      params={doc.params} />));

  const showcases = sources.map((source, idx) => (
    <Showcase
      key={idx}
      demo={demos[idx].default()}
      source={source} />
  ));

  return (
    <div className="Exhibit__DemoPage">
      <h1 className="Exhibit__DemoPage__Label">{name}</h1>
      <div className="Exhibit__DemoPage__Docs">
        {componentDocs}
      </div>
      <div className="Exhibit__DemoPage__Showcases">
        {showcases}
      </div>
    </div>);
}

/**
 * The Application to visualize components
 *
 * @param {object} props - { components, label }
 * @returns {object} - Component Demo Pages
 */
function App({ components, label, readme }) {
  const componentListItems = [];
  const routes = [];

  for (const component in components) {

    const demoPage = (
      <DemoPage
        name={component}
        docs={components[component].docs}
        sources={components[component].source}
        demos={components[component].demo} />);

    componentListItems.push(
      <ListItem
        link={`${process.env.PUBLIC_URL}/${component}`}
        label={component}
        key={component} />);

    routes.push(
      <Route
        path={`${process.env.PUBLIC_URL}/${component}`}
        key={component}
        component={() => demoPage} />);
  }

  return (
    <Router>
      <div className="Exhibit">
        <div className="Exhibit__Header">
          <Header label={label} />
        </div>
        <div className="Exhibit__Content">

          <div className="Exhibit__ComponentList">
            <List label="Components">
              {componentListItems}
            </List>
          </div>

          <Switch>
            {routes}
            <Route
              key={0}
              component={() => (<div className="Exhibit__LandingPage">{readme}</div>)} />
          </Switch>
        </div>
      </div>
    </Router>);
}

export default App;
