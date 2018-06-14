import { LOAD_THEME, APPLY_THEME_SUCCESS } from '../actionType';
import { initializeBoard } from '../board/action';
import { createSnake, paintSnake } from '../snake/action';

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

function applyThemeSuccess(theme, themeName) {
  return { type: APPLY_THEME_SUCCESS, theme, themeName };
}

export function applyDefaultTheme() {
  return (dispatch, getState) => {
    const state = getState();
    const themeName = state.app.themes[0].value;
    const theme = themes[themeName];
    return dispatch(applyThemeSuccess(theme, themeName));
  };
}

export function applyNewTheme(themeName) {
  return dispatch => {
    const theme = themes[themeName];
    return dispatch(applyThemeSuccess(theme, themeName));
  };
}

export function initializeGame(boardWidth, boardHeight, tileSize) {
  return dispatch => {
    dispatch(initializeBoard(boardWidth, boardHeight, tileSize));
    dispatch(createSnake());
    return dispatch(paintSnake());
  };
}
