import "./DemoPage.css";

import { Docs, Header, List, ListItem, Showcase } from "../index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Helmet from "react-helmet";
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

  const showcases = sources.map((source, idx) => {
    let demo = (<div></div>);
    if (typeof demos[idx].default === "function") demo = demos[idx].default();
    return (<Showcase key={idx} demo={demo} source={source} />);
  });

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
 * @param {array} components - list of components to be displayed
 * @param {string} label - name of the component library
 * @param {string} readme - readme to be displayed at page root
 * @returns {object} - Component Demo Pages
 */
function App({ components, label, readme }) {
  const componentListItems = [];
  const routes = [];

  for (const component in components) {

    const demoPage = (
      <div>
        <Helmet><title>{`${label} - ${component}`}</title></Helmet>
        <DemoPage
          name={component}
          docs={components[component].docs}
          sources={components[component].source}
          demos={components[component].demo} />
      </div>);

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
              component={() =>
                (<div>
                  <Helmet><title>{label}</title></Helmet>
                  <div className="Exhibit__LandingPage">{readme}</div>
                </div>)} />
          </Switch>
        </div>
      </div>
    </Router>);
}

export default App;
