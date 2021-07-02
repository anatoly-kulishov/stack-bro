import {baseInstance} from "./instances";

type GetCaptchaApiType = {
    url: string
}

const securityAPI = {
    getCaptcha: () => {
        return baseInstance.get<GetCaptchaApiType>("/security/get-captcha-url").then(res => res.data)
    }
}

export default securityAPI;