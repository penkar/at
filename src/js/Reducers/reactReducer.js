import { useReducer } from 'react';

function reactReducer(state, action) {
  switch (action.type) {
    case reactReducer.types.SET_STORY_ACTION: {
      return { ...state, newsStoryReducer: action.value };
    }
    case reactReducer.types.CHANGE_SETTING: {
      const settingsReducer = { ...state.settingsReducer, ...action.setting };
      return { ...state, settingsReducer };
    }
    case reactReducer.types.CHANGE_SETTING_BOOL: {
      const { settingsReducer } = state;
      settingsReducer[action.setting] = !settingsReducer[action.setting];
      return { ...state, settingsReducer };
    }
    case reactReducer.types.SET_STORY_TAGS: {
      const newsTaglineReducer = action.value.map((str) => ({ title: str.title, href: str.id }));
      return { ...state, newsTaglineReducer };
    }
    default: {
      return state;
    }
  }
}

reactReducer.types = {
  CHANGE_SETTING: 'CHANGE_SETTING',
  CHANGE_SETTING_BOOL: 'CHANGE_SETTING_BOOL',
  SET_STORY_ACTION: 'SET_STORY_ACTION',
  SET_STORY_TAGS: 'SET_STORY_TAGS',
};

const initialState = {
  newsStoryReducer: [],
  newsTaglineReducer: [],
  settingsReducer: {
    tableofcontents: false,
    searchSection: false,
    searchString: '',
  },
};

function useReactReducer() {
  const [state, dispatch] = useReducer(reactReducer, initialState);
  const changeSetting = (setting) => dispatch({ type: reactReducer.types.CHANGE_SETTING, setting });
  const changeSettingBool = (setting) => dispatch({
    type: reactReducer.types.CHANGE_SETTING_BOOL, setting,
  });
  const setStoryAction = (value) => dispatch({ type: reactReducer.types.SET_STORY_ACTION, value });
  const setStoryTags = (value) => dispatch({ type: reactReducer.types.SET_STORY_TAGS, value });

  return {
    ...state,
    actions: {
      changeSetting,
      changeSettingBool,
      setStoryAction,
      setStoryTags,
    },
  };
}

export default useReactReducer;
