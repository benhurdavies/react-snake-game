import React, { Component } from 'react';
import { Router } from '@reach/router';

import GameLayout from './GameLayout';
import Hearder from './Header';
import withRoot from '../withRoot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hearder />
        {/* <Router>
          <GameLayout path="/" />
        </Router> */}
        <GameLayout />
      </div>
    );
  }
}

export default withRoot(App);
