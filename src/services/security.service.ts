import { baseInstance } from '../api/api.instances';

interface IGetCaptchaApiResponse {
  url: string;
}

const BASE_URL: string = '/security';

export const securityAPI = {
  getCaptcha: () => {
    return baseInstance.get<IGetCaptchaApiResponse>(`${BASE_URL}/get-captcha-url`).then(res => res.data);
  },
};
