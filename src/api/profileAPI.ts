import { baseInstance } from './instances';
import { BaseResponseType, APIResponseType, ProfileType, PhotosType } from '../types';

type SavePhotoResponseDataType = {
  photos: PhotosType;
};

export const profileAPI = {
  getProfile: (userId: number) => {
    return baseInstance.get<Array<ProfileType>>(`/profile/${userId}`).then(res => res.data);
  },
  getStatus: (userId: number) => {
    return baseInstance.get<string>(`/profile/status/${userId}`).then(res => res.data);
  },
  setStatus: (status: string) => {
    return baseInstance.put<BaseResponseType>(`/profile/status`, { status }).then(res => res.data);
  },
  putProfile: (profile: ProfileType) => {
    return baseInstance.put<BaseResponseType>(`/profile`, profile).then(res => res.data);
  },
  putPhoto: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return baseInstance
      .put<APIResponseType<SavePhotoResponseDataType>>(`/profile/photo`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(res => res.data);
  },
};
