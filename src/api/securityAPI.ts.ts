import {baseInstance} from "./instances";

const securityAPI = {
    getCaptcha: () => {
        return baseInstance.get("/security/get-captcha-url").then(res => res.data)
    }
}

export default securityAPI;