import { LOAD_THEME, APPLY_THEME_SUCCESS } from '../actionType';

const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case LOAD_THEME:
      return { ...state, themes: action.themes };
    case APPLY_THEME_SUCCESS:
      return {
        ...state,
        theme: action.theme,
        themeName: action.themeName
      };
    default:
      return state;
  }
}
