import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ThemeChange from '../components/ThemeChange';
import LiveScore from '../components/LiveScore';
import { applyNewTheme } from '../store/app/action';

const StyleToolbar = styled(AppBar)`
  .toolbar {
    min-height: 50px;
  }
`;

class Header extends Component {
  handleThemeChange = event => {
    this.props.dispatch(applyNewTheme(event.target.value));
  };

  render() {
    const { game, themes, themeName } = this.props;
    return (
      <div>
        <StyleToolbar position="static" color="primary">
          <Toolbar className="toolbar">
            <Typography variant="title" color="inherit">
              Snake
            </Typography>
            <LiveScore
              currentScore={game.currentScore}
              highScore={game.highScore}
            />
            <ThemeChange
              themes={themes}
              themeName={themeName}
              handleChange={this.handleThemeChange}
            />
          </Toolbar>
        </StyleToolbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    themes: state.app.themes,
    themeName: state.app.themeName,
    game: state.game
  };
}

export default connect(mapStateToProps)(Header);
