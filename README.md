[![exhibit banner](https://raw.githubusercontent.com/au-re/react-exhibit/gh-pages/static/media/exhibit.png)](https://au-re.github.io/react-exhibit/)
[![License](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/au-re/react-exhibit/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/react-exhibit)
[![dependencies](https://david-dm.org/au-re/react-exhibit.svg)](https://david-dm.org/au-re/react-exhibit)
[![build](https://travis-ci.org/au-re/react-exhibit.svg?branch=master)](https://travis-ci.org/au-re/react-exhibit)

# react-exhibit

React components for documentation. Here to help visualize your React library.
Used in [react-exhibit-boilerplate](https://github.com/au-re/react-exhibit-boilerplate).

## Using the components

In you react project run:

```shell
npm i -S react-exhibit
```

Import the components you want from "react-exhibit".

```jsx
import React from "react";
import { Showcase } from "react-exhibit";
import "../node_modules/react-exhibit/dist/css/main.css";

const demo = (<div>I'm in a showcase!</div>);
const source = "(<div>I'm in a showcase!</div>)";

export default () => (
  <Showcase
    demo={demo}
    source={source} />);
```

You can view the documentation for this library [here](https://au-re.github.io/react-exhibit/).
