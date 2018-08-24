>**DEPRECATED** - [generator-react-exhibit](https://github.com/au-re/generator-react-exhibit) will no longer use this library and this repository won't receive further development.
Over the past year I've learned much about react and I came accross a wide variety of (much better) tools and libraries to visualize and document components. I would highly recommend anyone interested in creating their own react component library to check them out instead of this repository. 

>In particular:
[storybook](https://github.com/storybooks/storybook) - it works across frameworks, comes with many plugins that you can use to create great documentation. The next version of `generator-react-exhibit` will come with `storybook` included: you can use it to bootstrap new libraries, learn more [here](https://github.com/au-re/generator-react-exhibit).

[![exhibit banner](https://raw.githubusercontent.com/au-re/react-exhibit/gh-pages/static/media/exhibit.png)](https://au-re.github.io/react-exhibit/)
[![License](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)](https://github.com/au-re/react-exhibit/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/react-exhibit)
[![dependencies Status](https://david-dm.org/au-re/react-exhibit/status.svg?style=flat-square)](https://david-dm.org/au-re/react-exhibit)
[![build](https://travis-ci.org/au-re/react-exhibit.svg?branch=master)](https://travis-ci.org/au-re/react-exhibit)

# react-exhibit

React components for documentation. Here to help visualize your React library.
Used in [generator-react-exhibit](https://github.com/au-re/generator-react-exhibit).

## Using the components

In your React project run:

```shell
npm i -S react-exhibit
```

Import the components you want from "react-exhibit".

```jsx
import React from "react";
import { Icon } from "react-exhibit";
import "../node_modules/react-exhibit/lib/css/main.css";

export default () => (<Icon />);
```

You can view the documentation for this library [here](https://au-re.github.io/react-exhibit/).
