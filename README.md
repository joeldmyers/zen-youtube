# Zen Youtube

The idea of this is to have a Youtube search page without the annoying related videos. Unfortunately, Youtube recently started putting very strict quotas on its search APIs, so this will start to hit errors after a bit and stop working.

### Key features:

- React / React-DOM (using only functional components + Hooks)
- Redux (leveraging new Redux hooks)
- Webpack
- Babel
- node-sass
- Typescript

#### Notes on Babel

Babel obviously transpiles ES6 code etc. Specifically, `@babel/core` is the main babel package, `@babel-cli` allows us to compile files from the command line, `@babel/preset-env` allows us to transpile ES6 etc., and `@babel/preset-react` allows us to transpile JSX.

#### Notes on Webpack

Webpack does the work of bundling, code-splitting, tree-shaking, etc. To set up, we use `webpack`, `webpack-cli`, `webpack-dev-server`, `style-loader`, `node-sass`, `sass`, `sass-loader`, `babel-loader`, and

## Getting started

Using node v12.16.2 (npm v6.14.4), type `npm install`.

To run dev server type `npm start`.

The server runs on localhost:3000.
