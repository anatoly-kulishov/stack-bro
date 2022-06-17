import { AuthActionType } from '../../action-types';

export interface SignIn {
  type: AuthActionType.SIGN_IN;
  userId: number;
}

// Todo: -----------------------------------

export interface LogOutStart {
  type: AuthActionType.LOG_OUT_START;
}

export interface LogOutDenied {
  type: AuthActionType.LOG_OUT_DENIED;
}

export interface LogOutAccepted {
  type: AuthActionType.LOG_OUT_ACCEPTED;
}

export interface AuthMe {
  type: AuthActionType.AUTH_ME;
  payload: {
    id: number;
  };
}

export interface AuthNotValid {
  type: AuthActionType.AUTH_NOT_VALID;
  error: string[];
}

export interface GetCaptchaUrlSuccess {
  type: AuthActionType.GET_CAPTCHA_URL_SUCCESS;
  payload: string;
}

export type AuthActions =
  | SignIn
  | LogOutStart
  | LogOutDenied
  | LogOutAccepted
  | AuthMe
  | AuthNotValid
  | GetCaptchaUrlSuccess;
