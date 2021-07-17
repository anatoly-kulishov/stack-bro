/******************** APP TYPES *****************/
export const INITIALIZED_SUCCESS: string = 'APP/INITIALIZED_SUCCESS';

/******************** AUTH TYPES *****************/
export const SIGN_IN: string = 'SB/AUTH/SIGN_IN';
export const LOG_OUT: string = 'SB/AUTH/LOG_OUT';
export const AUTH_ME: string = 'SB/AUTH/AUTH_ME';
export const AUTH_NOT_VALID: string = 'SB/AUTH/NOT_VALID';
export const GET_CAPTCHA_URL_SUCCESS: string = 'SB/AUTH/GET_CAPTCHA_URL';

/******************** PROFILE TYPES ********************/
export const SET_USER_PROFILE: string = 'SB/PROFILE/SET_USER';
export const SET_PROFILE_STATUS: string = 'SB/PROFILE/SET_STATUS';
export const GET_FOLLOWING_STATUS: string = 'SB/PROFILE/GET_FOLLOWING_STATUS';
export const NEW_PROFILE_PHOTO_SENDS: string = 'SB/PROFILE/NEW_PHOTO_SENDS';
export const SAVE_PHOTO_SUCCESS: string = 'SB/PROFILE/SAVE_PHOTO_SUCCESS';
export const SAVE_PROFILE_SUCCESS: string = 'SB/PROFILE/SAVE_PROFILE_SUCCESS';
export const SAVE_PROFILE_FAILED: string = 'SB/PROFILE/SAVE_PROFILE_FAILED';

/******************** USERS TYPES ********************/
export const SET_USERS: string = 'SB/USERS/SET_USERS';
export const SET_TOTAL_USERS_COUNT: string = 'SB/USERS/SET_TOTAL_COUNT';
export const SET_CURRENT_PAGE: string = 'SB/USERS/SET_CURRENT_PAGE';
export const TOGGLE_FOLLOW_UNFOLLOW: string = 'SB/USERS/TOGGLE_FOLLOW_UNFOLLOW';
export const TOGGLE_IS_FOLLOWING_PROGRESS: string = 'SB/USERS/TOGGLE_IS_FOLLOWING_PROGRESS';
export const SET_USERS_FILTER: string = 'SB/USERS/SET_USERS_FILTER';

/******************** POSTS TYPES ********************/
export const FETCH_POSTS: string = 'SB/POSTS/FETCH_POSTS';
export const ADD_POST: string = 'SB/POSTS/CREATE_POST';
export const REMOVE_POST: string = 'SB/POSTS/REMOVE_POST';

/******************** DIALOGS TYPES ********************/
export const FETCH_DIALOGS: string = 'SB/DIALOGS/FETCH_DIALOGS';
export const ADD_DIALOG: string = 'SB/DIALOGS/ADD_DIALOG';
export const SEND_MESSAGE: string = 'SB/DIALOGS/SEND_MESSAGE';
export const REMOVE_DIALOG: string = 'SB/DIALOGS/REMOVE_DIALOG';
