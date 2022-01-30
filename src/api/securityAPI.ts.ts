import { baseInstance } from './instances';

type GetCaptchaApiResponseType = {
  url: string;
};

export const securityAPI = {
  getCaptcha: () => {
    return baseInstance.get<GetCaptchaApiResponseType>('/security/get-captcha-url').then(res => res.data);
  },
};
