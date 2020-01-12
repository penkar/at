import { useReducer } from 'react';

function reactReducer(state, action) {
  switch (action.type) {
    case reactReducer.types.SET_STORY_ACTION: {
      return { ...state, newsStoryReducer: action.value };
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
  SET_STORY_ACTION: 'SET_STORY_ACTION',
  SET_STORY_TAGS: 'SET_STORY_TAGS',
};

const initialState = {
  newsStoryReducer: [],
  newsTaglineReducer: [],
};

function useReactReducer() {
  const [state, dispatch] = useReducer(reactReducer, initialState);
  const setStoryAction = (value) => dispatch({ type: reactReducer.types.SET_STORY_ACTION, value });
  const setStoryTags = (value) => dispatch({ type: reactReducer.types.SET_STORY_TAGS, value });

  return {
    ...state,
    newsStoryActions: {
      setStoryAction,
      setStoryTags,
    },
  };
}

export default useReactReducer;
