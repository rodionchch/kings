import axios from 'axios';
import AuthResponse from 'models/AuthResponse';

export const userAuth = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  return axios.post<AuthResponse>('user/auth', {
    username,
    password,
  });
};
