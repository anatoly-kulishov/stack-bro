import {authInstance} from "./instances";
import {ProfileActionType} from "../store/actions/authActions";
import {ResultCodes, ResultCodesForCaptcha, APIResponseType} from "../types/general-types";

type GetAutResponseDataType = {
    data: {
        id: number,
        email: string,
        login: string
    }
}

type PostSignInDataType = {
    userId: number
}

const authAPI = {
    postSignIn: (profile: ProfileActionType) => {
        return authInstance.post<APIResponseType<PostSignInDataType, ResultCodes | ResultCodesForCaptcha>>("/auth/login", {
            email: profile.email,
            password: profile.password,
            rememberMe: profile.rememberMe,
            captcha: profile.captcha
        }).then(res => res.data)
    },
    getAuthMe: () => {
        return authInstance.get<APIResponseType<GetAutResponseDataType>>("/auth/me").then(res => res.data)
    },
    deleteLogOut: () => {
        return authInstance.delete<null>("/auth/login").then(res => res.data)
    }
}

export default authAPI;