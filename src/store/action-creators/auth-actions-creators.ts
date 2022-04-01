import { AuthActionType } from '../action-types/auth-action-type';

export const getCaptchaUrlSuccessThunk = (captchaUrl: string) => ({
  type: AuthActionType.GET_CAPTCHA_URL_SUCCESS,
  payload: captchaUrl,
});
