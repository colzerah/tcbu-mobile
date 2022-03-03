// import FormData from 'form-data';
import { ImageOrVideo } from 'react-native-image-crop-picker';
import env from '~/config/env';
import { IUser, Users } from '~/dtos/IUser';
import api from '../api';

interface IUpdateRequest {
  file: ImageOrVideo;
  userId: string;
}

interface IUserRequest {
  id?: string;
  code: string;
  birthDate: string | Date;
  name: string;
}

export const listUsersRequest = async (page: number): Promise<IUser> => {
  const response = await api.get(`/users/${page}`);
  return response.data;
};

export const requestEditUser = async (): Promise<IUser> => {
  const response = await api.put(`/users`);

  return response.data;
};

export const addUserRequest = async ({
  code,
  birthDate,
  name,
}: IUserRequest): Promise<Users> => {
  const response = await api.post(`/users`, { code, birthDate, name });

  return response.data;
};

export const editUserRequest = async ({
  id,
  code,
  birthDate,
  name,
}: IUserRequest): Promise<Users> => {
  const response = await api.patch(`/users`, { code, birthDate, name, id });

  return response.data;
};

export const updatePhotoRequest = async ({
  file,
  userId,
}: IUpdateRequest): Promise<void> => {
  const data = new FormData();

  data.append('photo', {
    uri: file.path,
    path: file.path,
    name: `${userId}-avatar`,
    type: file.mime,
  });

  await fetch(`${env?.api}/users/${userId}`, {
    method: 'patch',
    // headers: { 'Content-Type': 'multipart/form-data; boundary=X-ReactNative' },
    body: data,
  });
};

export const deleteUserRequest = async (id: string): Promise<IUser> => {
  const response = await api.delete(`/users?id=${id}`);

  return response.data;
};
