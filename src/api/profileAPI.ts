import {baseInstance} from "./instances";
import {BaseResponseType, ProfileType, ResultCodes} from "../types/Types";

type GetStatusApiType = {
    resultCode: ResultCodes,
    messages: Array<string>
    data: ProfileType
}

const profileAPI = {
    getProfile: (userId: number) => {
        return baseInstance.get<Array<ProfileType>>(`/profile/${userId}`).then(res => res.data)
    },
    getStatus: (userId: number) => {
        return baseInstance.get<GetStatusApiType>(`/profile/status/${userId}`).then(res => res.data)
    },
    updateStatus: (status: string) => {
        return baseInstance.put<BaseResponseType>(`/profile/status`, {status}).then(res => res.data)
    },
    putProfile: (profile: object) => {
        return baseInstance.put<BaseResponseType>(`/profile`, profile).then(res => res.data)
    },
    putPhoto: (file: File) => {
        const formData = new FormData();
        formData.append('image', file);
        return baseInstance.put<any>(`/profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}

export default profileAPI;