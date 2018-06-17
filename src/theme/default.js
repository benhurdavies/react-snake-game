import grey from '@material-ui/core/colors/grey';
import brown from '@material-ui/core/colors/brown';

export default {
  tileColor: '#757575',
  'tileColor-alternate': '#616161',
  snakeColor: 'black',

  // material design theme
  'material-ui': {
    palette: {
      primary: {
        light: brown[300],
        main: brown[500],
        dark: brown[700]
      },
      secondary: {
        light: grey[300],
        main: grey[500],
        dark: grey[700]
      }
    }
  }
};
