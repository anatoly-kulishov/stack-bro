import {authInstance} from "./instances";

const authAPI = {
    postSignIn: (profile: any) => {
        return authInstance.post("/auth/login", {
            email: profile.email,
            password: profile.password,
            rememberMe: true,
            captcha: false
        }).then(res => res.data)
    },
    deleteLogOut: () => {
        return authInstance.delete("/auth/login").then(res => res.data)
    },
    getAuthMe: () => {
        return authInstance.get("/auth/me").then(res => res.data)
    }
}

export default authAPI;