import "./DemoPage.css";

import { ApplicationTitle, Docs, GithubCorner, Header, HeaderTitle, List, ListItem, Showcase } from "../lib";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Helmet from "react-helmet";
import Sidebar from "react-sidebar";

/**
 * The source code contains relative paths, replace them with an absolute path
 * to the library name.
 * @example
 * parseDependency('import X from "../../lib.js"');
 * > 'import X from "libraryName"'
 *
 * @param {string} source - the source code
 * @param {string} libraryName - the name of the library
 * @returns {string} source where the dependency is replaced the libraryName
 */
function parseDependency(source, libraryName) {
  return source.replace(/(\.\.\/)+lib(.js)?/g, libraryName);
}

/**
 * Page containing the documentation and showcases
 *
 * @param {string} name - Name of the component to be demoed
 * @param {string} docs - jsdoc description of the component
 * @param {string} sources - demo source code to be displayed
 * @param {string} demos - component demos to be run
 * @param {string} libraryName - name of the library, used to replace relative paths
 * @returns {object} - The showcases and docs for a component
 */
function DemoPage({ name, docs, sources, demos, libraryName }) {

  const componentDocs = docs.map((doc, idx) => (
    <Docs
      key={idx}
      label={doc.name}
      description={doc.description}
      params={doc.params} />));

  const showcases = sources.map((source, idx) => {
    let demo = (<div></div>);
    if (typeof demos[idx].default === "function") demo = demos[idx].default();
    return (
      <Showcase
        key={idx}
        demo={demo}
        source={parseDependency(source, libraryName)} />);
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
 *
 *
 * @class ReactExhibit
 * @extends {Component}
 */
class ReactExhibit extends Component {

  /**
   * Creates an instance of ReactExhibit.
   * @param {any} props
   * @memberof ReactExhibit
   */
  constructor(props) {
    super(props);

    this.state = {
      sidebarOpen: false
    };

    this.toggleSideBar = this.toggleSideBar.bind(this);
  }

  /**
   *
   * @param {any} open
   * @memberof ReactExhibit
   */
  toggleSideBar(open) {
    this.setState({ sidebarOpen: open });
  }

  /**
   * Render ReactExhibit
   *
   * @returns {object}
   * @memberof ReactExhibit
   */
  render() {
    const { components, label, baseURL = "", readme } = this.props;

    const componentListItems = [];
    const routes = [];

    for (const component in components) {

      const demoPage = (
        <div>
          <Helmet><title>{`${label} - ${component}`}</title></Helmet>
          <DemoPage
            name={component}
            libraryName={label}
            docs={components[component].docs}
            sources={components[component].source}
            demos={components[component].demo} />
        </div>);

      componentListItems.push(
        <ListItem
          link={`${baseURL}/${component}`}
          label={component}
          key={component} />);

      routes.push(
        <Route
          path={`${baseURL}/${component}`}
          key={component}
          component={() => demoPage} />);
    }

    return (
      <Router>
        <div>
          <GithubCorner style={{ position: "fixed", zIndex: 10 }} size="80" bannerColor="#F9AE15" />
          <Header>
            <HeaderTitle title={label} href="/" />
          </Header>
          <Header sub bright>
            <ApplicationTitle title="Demo Component" onClick={this.toggleSideBar} />
          </Header>
          <Sidebar
            docked
            style={{

            }}
            sidebar={<div className="ReactExhibit__Sidebar">
              {componentListItems}
            </div>}
            open={this.state.sidebarOpen}
            onSetOpen={this.toggleSideBar}>
            <div>
              <Switch>
                {routes}
                <Route
                  component={() =>
                    (<div className="Exhibit__LandingPage">
                      <Helmet><title>{label}</title></Helmet>
                      <div>{readme}</div>
                    </div>)} />
              </Switch>
            </div>
          </Sidebar>
        </div>
      </Router>
    );
  }
}

export default ReactExhibit;
