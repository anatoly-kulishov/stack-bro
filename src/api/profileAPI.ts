import {baseInstance} from "./instances";

const profileAPI = {
    getProfile: (userId: number) => {
        return baseInstance.get(`/profile/${userId}`).then(res => res.data)
    }
}

export default profileAPI;