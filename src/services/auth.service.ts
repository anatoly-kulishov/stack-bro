import { IAPIResponseType, ResultCodesEnum, ResultCodesForCaptchaEnum } from '../shared/types';
import { IProfileAction } from '../store/action-creators';
import { authInstance } from '../api/api.instances';

interface IGetAutResponseData {
  email: string;
  id: number;
  login: string;
}

interface IPostSignInDataType {
  userId: number;
}

const BASE_URL: string = '/auth';

export const authService = {
  postSignIn: (profile: IProfileAction) => {
    return authInstance
      .post<IAPIResponseType<IPostSignInDataType, ResultCodesEnum | ResultCodesForCaptchaEnum>>(`${BASE_URL}/login`, {
        email: profile.email,
        password: profile.password,
        rememberMe: profile.rememberMe,
        captcha: profile.captcha,
      })
      .then(res => res.data);
  },
  getAuthMe: () => {
    return authInstance.get<IAPIResponseType<IGetAutResponseData>>(`${BASE_URL}/me`).then(res => res.data);
  },
  deleteLogOut: () => {
    return authInstance.delete<null>(`${BASE_URL}/login`).then(res => res.data);
  },
};
