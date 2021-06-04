import {authInstance} from "./instances";

const authAPI = {
    postSignIn: (profile: object) => {
        return authInstance.post("/auth/login", profile).then(res => res.data)
    },
    getAuthMe: () => {
        return authInstance.get("/auth/me").then(res => res.data)
    }
}

export default authAPI;