// import axios from "axios";
// import jwtDecode from "jwt-decode";
// import {SIGN_IN} from "../types";
// import {__authLogin__, _apiBase, errorMessage} from "../../constants";
// import {disable_buttons, enable_buttons, hideAlert, showAlert} from "./appActions";
// import store from "../index";

export function signIn(profile: object) {
    // store.dispatch(disable_buttons());
    // return async dispatch => {
    //     try {
    //         console.log(profile);
    //         axios.post(`${_apiBase}/signin/JoblinkUser`, profile)
    //             .then((response) => {
    //                 dispatch(hideAlert())
    //                 const access_token = response.data.token;
    //                 if (!!access_token) {
    //                     localStorage.setItem(__token__, access_token);
    //                     localStorage.setItem(__authLogin__, profile.email);
    //                     const id = jwtDecode(access_token).JoblinkUserId;
    //                     dispatch(getRole(id))
    //                     dispatch({type: SIGN_IN})
    //                 }
    //             })
    //             .catch(function (error) {
    //                 console.log(error)
    //                 dispatch(showAlert('warning', error.toString()));
    //                 dispatch(enable_buttons())
    //             });
    //     } catch (e) {
    //         console.error(errorMessage)
    //     }
    // }
}

export function refreshToken() {
    console.log('refreshToken()');
    // return async dispatch => {
    //     const auth_token = localStorage.getItem(__token__);
    //     if (!!auth_token) {
    //         dispatch({type: AUTHORIZATION})
    //     } else {
    //         console.log('You are not authorized...')
    //     }
    // }
}

export function logOut() {
    // localStorage.clear();
    // return async dispatch => {
    //     console.log('logOut()');
    //     try {
    //         dispatch({type: LOG_OUT})
    //     } catch (e) {
    //         console.error(errorMessage)
    //     }
    //     dispatch(enable_buttons())
    // }
}