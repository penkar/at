import { useReducer } from 'react';

function reactReducer(state, action) {
  switch (action.type) {
    case reactReducer.types.CHANGE_SETTING: {
      const settings = { ...state.settings, ...action.setting };
      return { ...state, settings };
    }
    case reactReducer.types.CHANGE_SETTING_BOOL: {
      const { settings } = state;
      settings[action.setting] = !settings[action.setting];
      return { ...state, settings };
    }
    default: {
      return state;
    }
  }
}

reactReducer.types = {
  CHANGE_SETTING: 'CHANGE_SETTING',
  CHANGE_SETTING_BOOL: 'CHANGE_SETTING_BOOL',
};

const initialState = {
  settings: {
    tableofcontents: false,
    searchSection: false,
    searchString: '',
  },
};

function useReactReducer() {
  const [state, dispatch] = useReducer(reactReducer, initialState);
  const changeSetting = (setting) => dispatch({ type: reactReducer.types.CHANGE_SETTING, ...setting });
  const changeSettingBool = (setting) => dispatch({ type: reactReducer.types.CHANGE_SETTING_BOOL, setting });

  return {
    ...state,
    settingsActions: {
      changeSetting,
      changeSettingBool,
    },
  };
}

export default useReactReducer;
