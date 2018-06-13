import { LOAD_THEME, APPLY_THEME_SUCCESS } from '../actionType';

const initialState = {};
export default function(state = initialState, action) {
  return (
    {
      [LOAD_THEME]: { ...state, themes: action.themes },
      [APPLY_THEME_SUCCESS]: {
        ...state,
        theme: action.theme,
        themeName: action.themeName
      }
    }[action.type] || state
  );
}
