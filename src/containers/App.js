import React, { Component } from 'react';

import GameLayout from './GameLayout';
import Hearder from './Header';
import withRoot from '../withRoot';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hearder />
        <GameLayout />
      </div>
    );
  }
}

export default withRoot(App);
