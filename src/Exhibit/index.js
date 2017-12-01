import "./Exhibit.css";

import { SystemTitle, Docs, GithubCorner, SystemHeader, ApplicationListItem, Showcase, ApplicationHeader, ApplicationTitle } from "../lib";
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

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


const mql = window.matchMedia(`(min-width: 800px)`);

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
      mql,
      sidebarDocked: true,
      sidebarOpen: true
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
  }
  /**
   *
   *
   * @memberof ReactExhibit
   */
  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({ mql, sidebarDocked: mql.matches });
  }
  /**
   *
   *
   * @memberof ReactExhibit
   */
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
  /**
   *
   *
   * @memberof ReactExhibit
   */
  mediaQueryChanged() {
    this.setState({ sidebarDocked: this.state.mql.matches });
  }

  /**
   *
   * @param {any} open
   * @memberof ReactExhibit
   */
  toggleSideBar(open) {
    this.setState({ sidebarOpen: !this.state.sidebarOpen, sidebarDocked: !this.state.sidebarDocked });
  }

  /**
   * Render ReactExhibit
   *
   * @returns {object}
   * @memberof ReactExhibit
   */
  render() {
    const { components, label, baseURL = "", readme, location } = this.props;

    const componentListItems = [];
    const routes = [];

    for (const component in components) {

      const demoPage = (
        <div>
          <Helmet><title>{`${label} - ${component}`}</title></Helmet>
          <DemoPage
            libraryName={label}
            docs={components[component].docs}
            sources={components[component].source}
            demos={components[component].demo} />
        </div>);

      componentListItems.push(
        <ApplicationListItem
          link={`${baseURL}/${component}`}
          label={component}
          key={component} />);

      routes.push(
        <Route exact
          path={`${baseURL}/${component}`}
          key={component}
          component={() => demoPage} />);
    }

    const { sidebarDocked } = this.state;

    return (
      <div className="ReactExhibit">
        <GithubCorner style={{ position: "fixed", zIndex: 10 }} size="80" bannerColor="#F9AE15" />
        <SystemHeader>
          <SystemTitle title={label} href={`/${baseURL}`} />
        </SystemHeader>
        <ApplicationHeader light collapsed={sidebarDocked} onClick={this.toggleSideBar}>
          <ApplicationTitle title={location.pathname} />
        </ApplicationHeader>
        <Sidebar
          docked={sidebarDocked}
          shadow={false}
          sidebarClassName="ReactExhibit__Sidebar"
          contentClassName="ReactExhibit__Sidebar__Content"
          sidebar={componentListItems}
          open={sidebarDocked}
          onSetOpen={this.toggleSideBar}>
          <div className="ReactExhibit__Content">
            <Switch>
              {routes}
              <Route exact path={`${baseURL}/`}
                component={() =>
                  (<div className="Exhibit__LandingPage">
                    <Helmet><title>{label}</title></Helmet>
                    <div>{readme}</div>
                  </div>)} />
              <Route component={() => <Redirect to="/" push />} />
            </Switch>
          </div>
        </Sidebar>
      </div>
    );
  }
}

export default withRouter(ReactExhibit);
