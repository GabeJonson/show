import axios from 'axios';

const request = axios.create({
  baseURL: '/api/',
});

const getUsersList = () => request('users/list');

const postUser = (userId: string, userName: string, userBirth: string) =>
  request.post(`user/${userId}`, {
    userName,
    userBirth,
  });

const putUser = (userId: string, userName: string, userBirth: string) =>
  request.put(`user/${userId}`, {
    userName,
    userBirth,
  });

const deleteUser = (userId: string) => request.delete(`url/${userId}`);
