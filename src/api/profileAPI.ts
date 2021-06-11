import {baseInstance} from "./instances";

const profileAPI = {
    getProfile: (userId: number) => {
        return baseInstance.get(`/profile/${userId}`).then(res => res.data)
    },
    getStatus: (userId: number) => {
        return baseInstance.get(`/profile/status/${userId}`).then(res => res.data)
    },
    updateStatus: (status: string) => {
        return baseInstance.put(`/profile/status`, {status}).then(res => res.data)
    }
}

export default profileAPI;