import { ProfilePhotosType, ProfileType } from '../shared/types/profile.types';
import { APIResponseType, BaseResponseType } from '../shared/types';
import { baseInstance } from '../api/api.instances';

type SavePhotoResponseDataType = {
  photos: ProfilePhotosType;
};

const BASE_URL: string = '/profile';

export const profileService = {
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
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data);
  },
};
