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
    },
    putPhoto: (file: File) => {
        const formData = new FormData();
        formData.append('image', file);
        return baseInstance.put(`/profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res => res.data.data)
    }
}

export default profileAPI;