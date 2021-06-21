/******************** APP ********************/
/** App state management **/
export const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS';

/******************** AUTH ********************/
/** Authorization **/
export const SIGN_IN = 'AUTH/SIGN_IN';
export const LOG_OUT = 'AUTH/LOG_OUT';
export const AUTH_ME = 'AUTH/AUTH_ME';
export const AUTH_NOT_VALID = 'AUTH/NOT_VALID';

/******************** PROFILE ********************/
/** Fetching **/
export const SET_USER_PROFILE = 'PROFILE/SET_USER';
export const SET_PROFILE_STATUS = 'PROFILE/SET_STATUS';

/******************** USERS ********************/
/** Fetching **/
export const SET_USERS = 'USERS/SET_USERS';
export const SET_TOTAL_USERS_COUNT = 'USERS/SET_TOTAL_COUNT';
export const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE';

/** Follow && UNFOLLOW **/
export const GET_FOLLOWING_STATUS = 'USERS/GET_FOLLOWING_STATUS';
export const TOGGLE_FOLLOW_UNFOLLOW = 'USERS/TOGGLE_FOLLOW_UNFOLLOW';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS'

/******************** POSTS ********************/
/** Fetching **/
export const FETCH_POSTS = 'POSTS/FETCH_POSTS';

/** Post Functions **/
export const ADD_POST = 'POSTS/CREATE_POST';
export const REMOVE_POST = 'POSTS/REMOVE_POST';

/******************** DIALOGS ********************/
/** Fetching **/
export const FETCH_DIALOGS = 'DIALOGS/FETCH_DIALOGS';

/** Dialog Functions **/
export const ADD_DIALOG = 'DIALOGS/ADD_DIALOG';
export const ADD_MESSAGE = 'DIALOGS/ADD_MESSAGE';
export const REMOVE_DIALOG = 'POSTS/REMOVE_DIALOG';