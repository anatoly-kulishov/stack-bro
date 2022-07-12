import { APIResponseType, ResultCodes, ResultCodesForCaptcha } from '../types';
import { ProfileActionType } from '../store/action-creators';
import { authInstance } from './instances';

type GetAutResponseDataType = {
  email: string;
  id: number;
  login: string;
};

type PostSignInDataType = {
  userId: number;
};

const BASE_URL: string = '/auth';

export const authAPI = {
  postSignIn: (profile: ProfileActionType) => {
    return authInstance
      .post<APIResponseType<PostSignInDataType, ResultCodes | ResultCodesForCaptcha>>(`${BASE_URL}/login`, {
        email: profile.email,
        password: profile.password,
        rememberMe: profile.rememberMe,
        captcha: profile.captcha,
      })
      .then(res => res.data);
  },
  getAuthMe: () => {
    return authInstance.get<APIResponseType<GetAutResponseDataType>>(`${BASE_URL}/me`).then(res => res.data);
  },
  deleteLogOut: () => {
    return authInstance.delete<null>(`${BASE_URL}/login`).then(res => res.data);
  },
};
