import "./LandingPage.css";

import React, { Component } from "react";

import Helmet from "react-helmet";

/**
 * A landing page with markup text
 *
 * @class LandingPage
 * @extends {Component}
 */
export class LandingPage extends Component {

    /**
     * Render the landing page
     *
     * @returns {object}
     * @memberof LandingPage
     */
    render() {
      const { readme, pageTitle } = this.props;
      return (
        <div className="ReactExhibit__Content__Container">
          <div className="ReactExhibit__LandingPage">
            <Helmet><title>{pageTitle}</title></Helmet>
            <div>{readme}</div>
          </div>
        </div>);
    }
}
