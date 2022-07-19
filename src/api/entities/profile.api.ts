import { baseInstance } from '../api.instances';
import { APIResponseType, BaseResponseType, PhotosType, ProfileType } from '../../shared/types';

type SavePhotoResponseDataType = {
  photos: PhotosType;
};

const BASE_URL: string = '/profile';

export const profileApi = {
  getProfile: (userId: number) => {
    return baseInstance.get<ProfileType[]>(`${BASE_URL}/${userId}`).then(res => res.data);
  },
  getStatus: (userId: number) => {
    return baseInstance.get<string>(`${BASE_URL}/status/${userId}`).then(res => res.data);
  },
  setStatus: (status: string) => {
    return baseInstance.put<BaseResponseType>(`${BASE_URL}/status`, { status }).then(res => res.data);
  },
  putProfile: (profile: ProfileType) => {
    return baseInstance.put<BaseResponseType>(`${BASE_URL}`, profile).then(res => res.data);
  },
  putPhoto: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return baseInstance
      .put<APIResponseType<SavePhotoResponseDataType>>(`${BASE_URL}/photo`, formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(res => res.data);
  },
};
