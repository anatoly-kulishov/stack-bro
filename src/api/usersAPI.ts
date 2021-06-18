import {baseInstance} from "./instances";

const usersAPI = {
    requestUsers: (currentPage: number = 1, pageSize: number = 10) => {
        return baseInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    getCurrentUserFollower: (userId: number) => {
        return baseInstance.get(`follow/${userId}`).then(res => res.data)
    },
    postUserFollow: (userId: number) => {
        return baseInstance.post(`follow/${userId}`, null).then(res => res.data)
    },
    deleteUserUnfollow: (userId: number) => {
        return baseInstance.delete(`follow/${userId}`).then(res => res.data)
    }
}

export default usersAPI;