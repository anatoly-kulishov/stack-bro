/******************** APP TYPES *****************/
export const INITIALIZED_SUCCESS: string = 'APP/INITIALIZED_SUCCESS';

/******************** AUTH TYPES *****************/
/** Authorization */
export const SIGN_IN: string = 'AUTH/SIGN_IN';
export const LOG_OUT: string = 'AUTH/LOG_OUT';
export const AUTH_ME: string = 'AUTH/AUTH_ME';
export const AUTH_NOT_VALID: string = 'AUTH/NOT_VALID';
export const GET_CAPTCHA_URL_SUCCESS: string = 'AUTH/GET_CAPTCHA_URL';

/******************** PROFILE TYPES ********************/
/** Fetching */
export const SET_USER_PROFILE: string = 'PROFILE/SET_USER';
export const SET_PROFILE_STATUS: string = 'PROFILE/SET_STATUS';

/** Functions */
export const GET_FOLLOWING_STATUS: string = 'PROFILE/GET_FOLLOWING_STATUS';
export const NEW_PROFILE_PHOTO_SENDS: string = 'PROFILE/NEW_PHOTO_SENDS';
export const SAVE_PHOTO_SUCCESS: string = 'PROFILE/SAVE_PHOTO_SUCCESS';
export const SAVE_PROFILE_SUCCESS: string = 'PROFILE/SAVE_PROFILE_SUCCESS';
export const SAVE_PROFILE_FAILED: string = 'PROFILE/SAVE_PROFILE_FAILED';

/******************** USERS TYPES ********************/
/** Fetching */
export const SET_USERS: string = 'USERS/SET_USERS';
export const SET_TOTAL_USERS_COUNT: string = 'USERS/SET_TOTAL_COUNT';
export const SET_CURRENT_PAGE: string = 'USERS/SET_CURRENT_PAGE';

/** Follow && UNFOLLOW */
export const TOGGLE_FOLLOW_UNFOLLOW: string = 'USERS/TOGGLE_FOLLOW_UNFOLLOW';
export const TOGGLE_IS_FOLLOWING_PROGRESS: string = 'USERS/TOGGLE_IS_FOLLOWING_PROGRESS'

/******************** POSTS TYPES ********************/
/** Fetching */
export const FETCH_POSTS: string = 'POSTS/FETCH_POSTS';

/** Functions */
export const ADD_POST: string = 'POSTS/CREATE_POST';
export const REMOVE_POST: string = 'POSTS/REMOVE_POST';

/******************** DIALOGS TYPES ********************/
/** Fetching */
export const FETCH_DIALOGS: string = 'DIALOGS/FETCH_DIALOGS';

/** Functions */
export const ADD_DIALOG: string = 'DIALOGS/ADD_DIALOG';
export const SEND_MESSAGE: string = 'DIALOGS/SEND_MESSAGE';
export const REMOVE_DIALOG: string = 'POSTS/REMOVE_DIALOG';