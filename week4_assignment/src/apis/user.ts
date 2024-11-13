/* eslint-disable @typescript-eslint/no-unused-vars */
import api from './api';

interface UserData {
  username: string;
  password: string;
  hobby: string;
}

// 유저 등록 (회원가입)
export const registerUser = async (data: UserData) => {
  const response = await api.post('/user', data);
  return response.data;
};

// 로그인 (토큰 받기)
export const loginUser = async (data: { username: string; password: string }) => {
  const response = await api.post('/login', data);
  const { token } = response.data;
  localStorage.setItem('token', token); // 받은 토큰을 localStorage에 저장
  return token;
};

// 내 취미 조회 (토큰 필요)
export const getMyHobby = async (_p0?: string) => {
  const response = await api.get('/user/hobby');
  return response.data;
};

// 다른 사람의 취미 조회
export const getOtherHobby = async (userId: number) => {
  const response = await api.get(`/user/${userId}/hobby`);
  return response.data;
};

// 취미 또는 비밀번호 변경 (토큰 필요)
export const updateUser = async (data: { password?: string; hobby?: string }) => {
  const response = await api.put('/user', data);
  return response.data;
};
