import {CHANGE_SETTING, CHANGE_SETTING_BOOL, } from '../Constants'

const initial = {
  tableofcontents: false,
  searchSection:false,
  searchString:'',
}

const settingsReducer = (state = initial, action) => {
  switch (action.type) {
    case CHANGE_SETTING_BOOL:
      let newstate = {};
      newstate[action.setting] = !state[action.setting];
      return Object.assign({}, state, newstate);
    case CHANGE_SETTING:
      return Object.assign({}, state, action.setting);
    default:
      return state;
  }
}
export default settingsReducer
