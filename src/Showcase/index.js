import "./Showcase.css";

import { PrismCode } from "react-prism";
import React from "react";

const Showcase = ({source, demo}) => (
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