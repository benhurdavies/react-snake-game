import grey from '@material-ui/core/colors/purple';
import brown from '@material-ui/core/colors/green';

export default {
  tileSize: 50,
  tileColor: '#757575',
  'tileColor-alternate': '#616161',

  // material design theme
  'material-ui': {
    palette: {
      primary: {
        light: grey[300],
        main: grey[500],
        dark: grey[700]
      },
      secondary: {
        light: brown[300],
        main: brown[500],
        dark: brown[700]
      }
    }
  }
};
