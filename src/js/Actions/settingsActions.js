import {CHANGE_SETTING, CHANGE_SETTING_BOOL,} from '../Constants'
export const changeSetting = (setting) => ({type: CHANGE_SETTING, setting});
export const changeSettingBool = (setting) => ({type: CHANGE_SETTING_BOOL, setting});
