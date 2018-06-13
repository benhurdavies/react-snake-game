import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export default {
  tileSize: 50,
  tileColor: '#757575',
  'tileColor-alternate': '#616161',

  // material design theme
  'material-ui': {
    palette: {
      primary: {
        light: purple[300],
        main: purple[500],
        dark: purple[700]
      },
      secondary: {
        light: green[300],
        main: green[500],
        dark: green[700]
      }
    }
  }
};
