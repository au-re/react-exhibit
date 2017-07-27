import "./Showcase.css";

import { PrismCode } from "react-prism";
import React from "react";

/**
 * A showcase component, renders a react component and displays source code.
 *
 * @export
 * @param {string} [demo] - the react demo to be run
 * @param {string} [source] - the source code to be displayed
 * @return {object} Showcase Component
 */
const Showcase = ({ source, demo }) => (
  <div className="Showcase">
    <div className="Showcase__Demo">
      {demo}
    </div>
    <div className="Showcase__Source">
      <pre className="Showcase__Source__Code">
        <PrismCode className="language-jsx">
          {source}
        </PrismCode>
      </pre>
    </div>
  </div>
);

export default Showcase;