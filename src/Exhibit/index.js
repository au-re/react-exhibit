import "./Exhibit.css";

import { ApplicationHeader, ApplicationListDropdown, ApplicationListItem, ApplicationTitle, GithubCorner, SystemHeader, SystemTitle } from "../lib";
import React, { Component } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import { DemoPage } from "./DemoPage";
import { LandingPage } from "./LandingPage";
import Sidebar from "react-sidebar";

const mql = window.matchMedia(`(min-width: 992px)`);

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
      sidebarOpen: !this.state.sidebarOpen
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
    const { components, label, baseURL = "", readme, location } = this.props;

    const componentListItems = [];
    const routes = [];

    for (const component in components) {

      componentListItems.push(
        <ApplicationListDropdown label={component} key={component} open>
          <ApplicationListItem
            onClick={this.toggleSideBar}
            link={`${baseURL}/${component}`}
            label={component}
            key={component} />
        </ApplicationListDropdown>);

      routes.push(
        <Route exact
          path={`${baseURL}/${component}`}
          key={component}
          component={() =>
            <DemoPage
              name={component}
              libraryName={label}
              docs={components[component].docs}
              sources={components[component].source}
              demos={components[component].demo} />} />);
    }

    const { sidebarDocked, sidebarOpen } = this.state;

    return (
      <div className="ReactExhibit">
        <GithubCorner style={{ position: "fixed", zIndex: 13 }} size="80" bannerColor="#F9AE15" />
        <SystemHeader>
          <SystemTitle title={label} href={`/${baseURL}`} />
        </SystemHeader>
        <ApplicationHeader light collapsed={sidebarDocked} onClick={this.toggleSideBarDock}>
          <ApplicationTitle title={location.pathname} />
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
              <Route component={() => <Redirect to="/" push />} />
            </Switch>
          </div>
        </Sidebar>
      </div>);
  }
}

export default withRouter(ReactExhibit);
