# React / Redux Boilerplate Setup 2020

## Introduction

The purpose of this repo is to create a baseline setup for React + Redux + Webpack.

Obviously there are other alternatives - Next.js, create-react-app, etc.

This is a baseline starting point with React and Redux to create new projects quickly with only the core configuration I want to have generally.

Below are some notes on setup details.

### Key features:

- React / React-DOM (using only functional components + Hooks)
- Redux (leveraging new Redux hooks)
- Webpack
- Babel
- node-sass

#### Notes on Babel

Babel obviously transpiles ES6 code etc. Specifically, `@babel/core` is the main babel package, `@babel-cli` allows us to compile files from the command line, `@babel/preset-env` allows us to transpile ES6 etc., and `@babel/preset-react` allows us to transpile JSX.

#### Notes on Webpack

Webpack does the work of bundling, code-splitting, tree-shaking, etc. To set up, we use `webpack`, `webpack-cli`, `webpack-dev-server`, `style-loader`, `node-sass`, `sass`, `sass-loader`, `babel-loader`, and

## Getting started

Using node v12.16.2 (npm v6.14.4), type `npm install`.

To run dev server type `npm start`.

The server runs on localhost:3000.
