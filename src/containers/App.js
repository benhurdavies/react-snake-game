import React, { Component } from 'react';
import { Router } from '@reach/router';

import Game from './Game';
import Hearder from './Header';
import withRoot from '../withRoot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hearder />
        <Router>
          <Game path="/game" />
        </Router>
      </div>
    );
  }
}

export default withRoot(App);
