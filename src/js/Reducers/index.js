import { combineReducers } from 'redux'
import { createStore } from 'redux'

import settingsReducer from './settingsReducer'
import newsTaglineReducer from './newsTaglineReducer'
import newsStoryReducer from './newsStoryReducer'

const reducer = combineReducers({
  settingsReducer,
  newsStoryReducer,
  newsTaglineReducer,
});

export default reducer;
