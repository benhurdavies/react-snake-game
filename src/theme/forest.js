import lightBlue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';

export default {
  tileSize: 30,
  tileColor: '#64DD17',
  'tileColor-alternate': '#76FF03',
  snakeColor: 'black',

  // material design theme
  'material-ui': {
    palette: {
      primary: {
        light: lightBlue[300],
        main: lightBlue[500],
        dark: lightBlue[700]
      },
      secondary: {
        light: green[300],
        main: green[500],
        dark: green[700]
      }
    }
  }
};
