react-snake-game
==============

<div align="center">

[![Build Status](https://travis-ci.org/benhurdavies/react-snake-game.svg?branch=master)](https://travis-ci.org/benhurdavies/react-snake-game)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/benhurdavies/react-snake-game)
[![HitCount](http://hits.dwyl.io/benhurdavies/react-snake-game.svg)](https://github.com/benhurdavies/react-snake-game)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/benhurdavies/react-snake-game/blob/master/LICENSE)

</div>

A simple game build using react.js
[Try out the game](https://benhurdavies.github.io/react-snake-game/)

## Installation

- Install [Node](http://nodejs.org/download/)
- Install the dependencies

```
yarn install
```

### Getting Started

```
yarn start
```

Open your browser at `http://localhost:3000/`

## Features

### React and Redux

* **create-react-app** - Facebook's [create-react-app](https://github.com/facebookincubator/create-react-app) is used to get a production-ready React application quickly off the ground. It configures things like Webpack and Babel, so you don't have to.

* **Redux** - We use [Redux](https://github.com/reactjs/redux) to manage complex application state. In the app, you'll find an example workflow to add items to a list.

* **konvajs** -  we use [react-konva](https://github.com/konvajs/react-konva) for HTML5 2d canvas for game area. It is a reactjs wrapper for [konvajs](https://konvajs.github.io/)

### Styling
* **styled-components** - we use [styled-components](https://www.styled-components.com) to manage style outside game area.

* **material-ui** - React components that implement Google's Material Design. View the docs [here](https://material-ui.com/).


### Tooling

* **Prettier** - [Prettier](https://github.com/prettier/prettier) is wonderful magic that formats your JavaScript code for you. It is configured (using [Husky](https://github.com/typicode/husky)) to format JavaScript code in a precommit hook. You may also choose to configure Prettier with your editor of choice.

* **Hot Module Replacement (HMR)** -
[Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement) updates the application on code change, without refreshing. Redux state is maintained.

* **Redux DevTools - Chrome extension** - The app is configured to allow this [Chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) to display dispatched actions and state diffs.

### Testing

* **Jest** - Facebook's [Jest](https://github.com/facebook/jest/) is configured out of the box with create-react-app. This comprehensive testing tool is built on top of Jasmine and will satisfy most of your unit testing needs.

* **Enzyme** - [Enzyme](https://github.com/airbnb/enzyme) is pulled in to facilitate easier component testing.

# Continuous Integration

Travis CI runs tests on each branch. Successful merges to master are auto deployed to the [GitHub Page](http://benhurdavies.github.io/react-snake-game). 
---

Development is in progress and welcomes contributions.
