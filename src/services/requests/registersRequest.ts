import { IUser } from '../../dtos/IUser';
import api from '../api';

export const requestListUsers = async (): Promise<IUser[]> => {
  const response = await api.get(`/user`);

  return response.data;
};

export const requestEditUser = async (): Promise<IUser> => {
  const response = await api.put(`/user`);

  return response.data;
};

export const requestAddUser = async (): Promise<IUser> => {
  const response = await api.post(`/user`);

  return response.data;
};

export const requestDeleteUser = async (): Promise<IUser> => {
  const response = await api.delete(`/user`);

  return response.data;
};
