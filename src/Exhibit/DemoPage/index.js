import { ContentTile, Showcase } from "../../lib";
import React, { Component } from "react";

import Helmet from "react-helmet";

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
export class DemoPage extends Component {

  /**
   *
   *
   * @returns {object}
   * @memberof DemoPage
   */
  render() {
    const { name, source, component, libName } = this.props;

    let demo = (<div></div>);
    if (typeof component.default === "function") demo = component.default();

    return (
      <div className="ReactExhibit__DemoPage">
        <Helmet><title>{`${libName} - ${name}`}</title></Helmet>
        <ContentTile>
          <Showcase
            demo={demo}
            source={parseDependency(source, libName)} />
        </ContentTile>
      </div>);
  }
}
