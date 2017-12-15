import { ContentTile, Docs } from "../../lib";
import React, { Component } from "react";

import Helmet from "react-helmet";
import Markdown from "markdown-to-jsx";

/**
 * Page containing the documentation of a component, specific readme and prop definition
 *
 * @param {string} name - Name of the component to be demoed
 * @param {string} docs - jsdoc descriptions of the component(s)
 * @param {string} libraryName - name of the library, used to replace relative paths
 * @returns {object} - The showcases and docs for a component
 */
export class DocPage extends Component {

  /**
   * Render the Documentation Page
   *
   * @returns {object}
   * @memberof DocPage
   */
  render() {
    const { componentName = "", libName = "", docs = [], readme } = this.props;

    const componentDocs = docs.map((doc, idx) => (
      <Docs
        key={idx}
        label={doc.name}
        description={doc.description}
        params={doc.params} />));

    return (
      <div className="ReactExhibit__DocPage">
        <Helmet><title>{`${libName} - ${componentName}`}</title></Helmet>
        {readme && <Markdown>{readme}</Markdown>}
        {componentDocs}
      </div>);
  }
}
