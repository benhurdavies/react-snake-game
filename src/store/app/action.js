import { LOAD_THEME, APPLY_THEME_SUCCESS } from '../actionType';

import themes from '../../theme';

export function loadThemes() {
  return {
    type: LOAD_THEME,
    themes: [
      { name: 'default', value: 'default' },
      { name: 'forest', value: 'forest' }
    ]
  };
}

function applyThemeSuccess(theme) {
  return { type: APPLY_THEME_SUCCESS, theme };
}

export function applyDefaultTheme() {
  return (dispatch, getState) => {
    const state = getState();
    const theme = themes[state.app.themes[0].value];
    return dispatch(applyThemeSuccess(theme));
  };
}
