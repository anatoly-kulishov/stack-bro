import AuthActionType from "../action-types/auth-action-type";

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
  type: AuthActionType.GET_CAPTCHA_URL_SUCCESS,
  payload: captchaUrl
})