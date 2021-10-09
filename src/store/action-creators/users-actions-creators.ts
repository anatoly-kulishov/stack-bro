import {GET_CAPTCHA_URL_SUCCESS} from "../store-types";

// Todo: Add Action for Typing!
export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: captchaUrl
})