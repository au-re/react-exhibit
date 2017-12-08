import "./Exhibit.css";

import { ApplicationHeader, ApplicationListDropdown, ApplicationListItem, ApplicationTitle, ContentTile, GithubCorner, SystemHeader, SystemTitle } from "../lib";
import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import { DemoPage } from "./DemoPage";
import { DocPage } from "./DocPage";
import { LandingPage } from "./LandingPage";
import Sidebar from "react-sidebar";
import _ from "lodash";

const mql = window.matchMedia(`(min-width: 992px)`);

const componentNameFromUrl = (url) => url.split("/")[1];
const demoNameFromUrl = (url) => url.split("/")[2];

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
    mql.addListener(this.mediaQueryChanged);
    this.setState({
      sidebarDocked: mql.matches,
      sidebarOpen: mql.matches
    });
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
  render() { // TODO: rename label to library name
    const { components, label, baseURL = "", readme, location } = this.props;
    const { sidebarDocked, sidebarOpen } = this.state;

    // create a dropdown for each component, and an item for each demo
    const componentListItems = Object.keys(components).map((component) =>
      (<ApplicationListDropdown
        label={component}
        key={component}
        link={`${baseURL}/${component}`}
        active={component === componentNameFromUrl(location.pathname)}
        open={component === componentNameFromUrl(location.pathname)}>
        <ApplicationListItem
          onClick={this.toggleSideBar}
          link={`${baseURL}/${component}`}
          label="Documentation"
          key={`${component}/docs`} />
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
    const routes = Object.keys(components).map((component) =>
      (<Route path={`${baseURL}/${component}`} component={() => (
        <Switch>
          <Route exact path={`${baseURL}/${component}`}
            component={() => <DocPage
              componentName={component}
              libraryName={label}
              docs={components[component].docs} />} />
          {
            Object.keys(components[component].demo).map((demoName) =>
              <Route exact
                path={`${baseURL}/${component}/${demoName}`}
                key={`route/${component}/${demoName}`}
                component={() => <ContentTile />} />)
          }
          <Route component={() => <Redirect to={`${baseURL}/${component}`} push />} />
        </Switch>)} />));

    console.log(routes);

    return (
      <div className="ReactExhibit">
        <GithubCorner style={{ position: "fixed", zIndex: 13 }} size="80" bannerColor="#F9AE15" />
        <SystemHeader>
          <SystemTitle title={label} href={`/${baseURL}`} />
        </SystemHeader>
        <ApplicationHeader light collapsed={sidebarDocked} onClick={this.toggleSideBarDock}>
          <ApplicationTitle title={`${componentNameFromUrl(location.pathname)} > ${demoNameFromUrl(location.pathname)} ` || label} />
        </ApplicationHeader>
        <Sidebar
          docked={sidebarDocked}
          shadow={false}
          sidebarClassName="ReactExhibit__Sidebar"
          contentClassName="ReactExhibit__Sidebar__Content"
          sidebar={componentListItems}
          open={sidebarOpen}
          onSetOpen={this.toggleSideBar}>
          <div className="ReactExhibit__Content">
            <Switch>
              <Route exact path={`${baseURL}/`}
                component={() => <LandingPage readme={readme} pageTitle={label} />} />
              {routes}
              <Route component={() => <Redirect to={`${baseURL}/`} push />} />
            </Switch>
          </div>
        </Sidebar>
      </div>);
  }
}

export default withRouter(ReactExhibit);
