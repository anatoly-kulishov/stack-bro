/******************** APP ********************/
export const SHOW_LOADER = 'APP/SHOW_LOADER';
export const HIDE_LOADER = 'APP/HIDE_LOADER';
export const ENABLE_BUTTONS = 'APP/ENABLE_BUTTONS';
export const DISABLE_BUTTONS = 'APP/DISABLE_BUTTONS';

/******************** LOGIN ********************/
export const SIGN_IN = 'AUTH/SIGN_IN';
export const LOG_OUT = 'AUTH/LOG_OUT';
export const AUTH_ME = 'AUTH/AUTH_ME';

/******************** PROFILE ********************/
export const SET_USER_PROFILE = 'PROFILE/SET_USER';

/******************** USERS ********************/
/** Fetching **/
export const SET_USERS = 'USERS/SET_USERS';
export const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_COUNT';
export const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';

/** Follow && UNFOLLOW **/
export const GET_FOLLOWING_STATUS = 'USERS/GET_FOLLOWING_STATUS';
export const FOLLOW_UNFOLLOW = 'USERS/FOLLOW_UNFOLLOW';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS'

/******************** POSTS ********************/
export const FETCH_POSTS = 'POSTS/FETCH_POSTS';
export const ADD_POST = 'POSTS/CREATE_POST';
export const REMOVE_POST = 'POSTS/REMOVE_POST';

/******************** DIALOGS ********************/
export const FETCH_DIALOGS = 'DIALOGS/FETCH_DIALOGS';
export const ADD_DIALOG = 'DIALOGS/ADD_DIALOG';
export const ADD_MESSAGE = 'DIALOGS/ADD_MESSAGE';
export const REMOVE_DIALOG = 'POSTS/REMOVE_DIALOG';