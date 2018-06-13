import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';

function withRoot(Component) {
  class WithRoot extends Component {
    theme = () => createMuiTheme({ ...this.props.theme['material-ui'] });
    render() {
      return (
        <MuiThemeProvider theme={this.theme()}>
          <CssBaseline />
          <Component {...this.props} />
        </MuiThemeProvider>
      );
    }
  }

  function mapStateToProps(state) {
    return {
      theme: state.app.theme
    };
  }

  return connect(mapStateToProps)(WithRoot);
}

export default withRoot;
