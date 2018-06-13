import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyleToolbar = styled(AppBar)`
  @media (min-width: 600px) {
    .MuiToolbar-root-36 {
      min-height: 50px;
    }
  }
`;

class Header extends Component {
  render() {
    return (
      <div>
        <StyleToolbar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Snake
            </Typography>
          </Toolbar>
        </StyleToolbar>
      </div>
    );
  }
}

export default Header;
