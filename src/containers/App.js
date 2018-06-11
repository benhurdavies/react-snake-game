import React, { Component } from 'react';
import { Router } from '@reach/router';

import Game from './Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Game path="/game" />
        </Router>
      </div>
    );
  }
}

export default App;
