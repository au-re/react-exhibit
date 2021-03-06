import "./Exhibit.css";

import React, { Component } from "react";
import { Link, Redirect, Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom";
import Sidebar from "react-sidebar";

import { ApplicationHeader, ApplicationListDropdown, ApplicationListItem, ApplicationTitle, SystemHeader, SystemTitle } from "../lib";
import { DemoPage } from "./DemoPage";
import { DocPage } from "./DocPage";
import { LandingPage } from "./LandingPage";

const mql = window.matchMedia(`(min-width: 992px)`);

const componentNameFromUrl = (url, baseURL) => url.split("/")[baseURL ? 2 : 1];
const demoNameFromUrl = (url, baseURL) => url.split("/")[baseURL ? 3 : 2];
const componentUrl = (url, baseURL) => url.split("/").slice(0, baseURL ? 3 : 2).join("/");

/**
 * Application to demo react components
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
      sidebarDocked: false,
      sidebarOpen: false
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.toggleSideBar = this.toggleSideBar.bind(this);
    this.toggleSideBarDock = this.toggleSideBarDock.bind(this);
  }

  /**
   * When the component mounts, listen for media query changes
   *
   * @memberof ReactExhibit
   */
  componentWillMount() {
    const { components, libName, baseURL = "" } = this.props;

    mql.addListener(this.mediaQueryChanged);
    this.setState({
      sidebarDocked: mql.matches,
      sidebarOpen: mql.matches
    });

    // create a dropdown for each component, and an item for each demo
    this.componentList = Object.keys(components).map((component) =>
      (<ApplicationListDropdown
        label={component}
        key={component}
        link={`${baseURL}/${component}`}>
        {
          Object.keys(components[component].demo).map((demoName) =>
            <ApplicationListItem
              onClick={this.toggleSideBar}
              link={`${baseURL}/${component}/${demoName}`}
              label={demoName}
              key={`${component}/${demoName}`} />)
        }
      </ApplicationListDropdown>));

    // setup the routes for all components
    this.routes = Object.keys(components).map((component, idx) =>
      (<Route key={idx} path={`${baseURL}/${component}`} component={() => (
        <div>
          <DocPage
            componentName={component}
            libName={libName}
            readme={components[component].readme}
            docs={components[component].docs} />
          <Switch>
            <Route exact path={`${baseURL}/${component}`} component={() => <div></div>} />
            {
              Object.keys(components[component].demo).map((demoName) =>
                <Route exact
                  path={`${baseURL}/${component}/${demoName}`}
                  key={`route/${component}/${demoName}`}
                  component={() => <DemoPage
                    name={component}
                    source={components[component].demo[demoName].source}
                    component={components[component].demo[demoName].component}
                    libName={libName} />} />)
            }
            <Route component={() => <Redirect to={`${baseURL}/${component}`} push />} />
          </Switch>
        </div>)} />));
  }

  /**
   * When the component unmounts, remove the media query listener
   *
   * @memberof ReactExhibit
   */
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  /**
   * Open the sidebar and dock it, if the query matches
   *
   * @memberof ReactExhibit
   */
  mediaQueryChanged() {
    this.setState({
      sidebarOpen: this.state.mql.matches,
      sidebarDocked: this.state.mql.matches
    });
  }

  /**
   * Toggle the sidebar open on and off
   *
   * @param {any} open
   * @memberof ReactExhibit
   */
  toggleSideBar() {
    this.setState({
      sidebarOpen: this.state.sidebarDocked || !this.state.sidebarOpen
    });
  }

  /**
   * Toggle the sidebar dock on and off
   *
   * @param {any} open
   * @memberof ReactExhibit
   */
  toggleSideBarDock() {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen,
      sidebarDocked: this.state.mql.matches && !this.state.sidebarDocked
    });
  }

  /**
   * Render ReactExhibit
   *
   * @returns {object}
   * @memberof ReactExhibit
   */
  render() {
    const { libName, baseURL = "", readme, location } = this.props;
    const { sidebarDocked, sidebarOpen } = this.state;
    const pathname = (location && location.pathname) || "";

    return (
      <div className="ReactExhibit">
        <SystemHeader>
          <SystemTitle title={libName} href={baseURL || "/"} />
        </SystemHeader>
        <ApplicationHeader light collapsed={sidebarDocked} onClick={this.toggleSideBarDock}>
          <ApplicationTitle>
            {
              componentNameFromUrl(pathname, baseURL) &&
              <Link to={componentUrl(pathname, baseURL)}>{componentNameFromUrl(pathname, baseURL)}</Link>
            }
            {
              demoNameFromUrl(pathname, baseURL) &&
              <span style={{ marginLeft: "4px" }}>
                <span style={{ marginRight: "4px" }}>/</span>
                <Link to={pathname}>{demoNameFromUrl(pathname, baseURL)}</Link>
              </span>
            }
          </ApplicationTitle>
        </ApplicationHeader>
        <Sidebar
          docked={sidebarDocked}
          shadow={false}
          sidebarClassName="ReactExhibit__Sidebar"
          contentClassName="ReactExhibit__Sidebar__Content"
          sidebar={this.componentList}
          open={sidebarOpen}
          onSetOpen={this.toggleSideBar}>
          <div className="ReactExhibit__Content">
            <div className="ReactExhibit__Content__Container">
              <Switch>
                <Route exact path={`${baseURL}/`}
                  component={() => <LandingPage readme={readme} pageTitle={libName} />} />
                {this.routes}
                <Route component={() => <Redirect to={`${baseURL}/`} push />} />
              </Switch>
            </div>
          </div>
        </Sidebar>
      </div>);
  }
}

const Exhibit = withRouter(ReactExhibit);
export default (props) => <Router><Exhibit {...props} /></Router>;
