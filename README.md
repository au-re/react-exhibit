[![exhibit banner](https://raw.githubusercontent.com/au-re/react-exhibit/gh-pages/static/media/exhibit.png)](https://au-re.github.io/react-exhibit/)
[![License](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/au-re/react-exhibit/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/react-exhibit)

# react-exhibit

A library providing React components for documentation. It is there to help
visualize your React library. You can also use this repo as a boilerplate for
your own library.

## As a boilerplate

Clone the repository

```
git clone https://github.com/au-re/react-exhibit.git
cd react-exhibit
```

Change the `package.json` and `README.md` information.
Remove the all the files in the src folder and add your own components instead.
You can add a `demo` folder in a components folder. You can add as many demos as
you want in there. The demo will automatically be rendered and the source displayed.

In addition you can comment your code using JSDOC syntax. This information will
then also be displayed in the documentation.

e.g.
```
/**
 * A showcase component, renders a react component and displays source code.
 *
 * @export
 * @param {string} demo - the react demo to be run
 * @param {string} source - the source code to be displayed
 * @return {object} Showcase Component
 */
const Showcase = ({ source, demo }) => ( ... );
```

Only comments with the `@export` tag will be shown in the documentation.
Only if the component also has a demo will the comments be shown.

To view your components run:

```
npm start
```

You can create a production ready website for your documentation with:

```
npm run build
```

You can build your library with:

```
npm run build:dist
```

After running this command your library will be found in the `dist` folder.

Make sure you export your components from `index.js`. Only the components
exported here will be part of your library.

You can then published your library to `npm`. To do that, simply run:

`npm publish`


## Using the components

In you react project run:

```
npm i -S react-exhibit
```

Import the components you want from "react-exhibit".

```
import React from "react";
import { Showcase } from "react-exhibit";
import "./node_modules/react-exhibit/dist/css/main.css"

const demo = (<div>I'm in a showcase!</div>)
const source = "(<div>I'm in a showcase!</div>)";

export default () => (
  <Showcase
    demo={demo}
    source={source} />);
```

You can view the documentation for this library [here](https://au-re.github.io/react-exhibit/).
