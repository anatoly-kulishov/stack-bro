import { IProfile, IProfilePhotos } from '../shared/types/profile.types';
import { IAPIResponseType, IBaseResponse } from '../shared/types';
import { baseInstance } from '../api/api.instances';

interface ISavePhotoResponseData {
  photos: IProfilePhotos;
}

const BASE_URL: string = '/profile';

export const profileService = {
  getProfile: (userId: number) => {
    return baseInstance.get<IProfile[]>(`${BASE_URL}/${userId}`).then(res => res.data);
  },
  getStatus: (userId: number) => {
    return baseInstance.get<string>(`${BASE_URL}/status/${userId}`).then(res => res.data);
  },
  setStatus: (status: string) => {
    return baseInstance.put<IBaseResponse>(`${BASE_URL}/status`, { status }).then(res => res.data);
  },
  putProfile: (profile: IProfile) => {
    return baseInstance.put<IBaseResponse>(`${BASE_URL}`, profile).then(res => res.data);
  },
  putPhoto: (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    return baseInstance
      .put<IAPIResponseType<ISavePhotoResponseData>>(`${BASE_URL}/photo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => res.data);
  },
};
