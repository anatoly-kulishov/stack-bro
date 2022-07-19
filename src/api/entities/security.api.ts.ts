import { baseInstance } from '../api.instances';

type GetCaptchaApiResponseType = {
  url: string;
};

const BASE_URL: string = '/security';

export const securityAPI = {
  getCaptcha: () => {
    return baseInstance.get<GetCaptchaApiResponseType>(`${BASE_URL}/get-captcha-url`).then(res => res.data);
  },
};
