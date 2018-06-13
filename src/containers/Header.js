import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ThemeChange from '../components/ThemeChange';
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
    return (
      <div>
        <StyleToolbar position="static" color="primary">
          <Toolbar className="toolbar">
            <Typography variant="title" color="inherit">
              Snake
            </Typography>
            <ThemeChange
              themes={this.props.themes}
              themeName={this.props.themeName}
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
    themeName: state.app.themeName
  };
}

export default connect(mapStateToProps)(Header);
