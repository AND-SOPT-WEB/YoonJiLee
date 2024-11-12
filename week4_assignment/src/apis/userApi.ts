import axios from 'axios';

export const getUserHobby = async (userId: string) => {
  const response = await axios.get(`/api/user/${userId}/hobby`);
  return response.data.hobby;
};
