import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from 'src/constants/auth';

export type AuthHookType = {
  accessToken: string | null;
  refreshToken: string | null;
  api: AxiosInstance;
  authenticated: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
};

export default function useAuth(): AuthHookType {
  const cookies = new Cookies(null, { path: '/' });
  const [authenticated, setAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken = cookies.get(ACCESS_TOKEN);
    if (!accessToken) return;

    const refreshToken = cookies.get(REFRESH_TOKEN);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setAuthenticated(true);
  }, []);

  const api = axios.create({
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  api.interceptors.response.use((response) => response);

  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    if (authenticated) return;

    const url =
      'https://auth-service-dev-07a2665f1f66.herokuapp.com/v1/auth/login/email';
    try {
      const { data } = await api.post(url, { email, password });
      const { accessToken, refreshToken } = data;

      cookies.set(ACCESS_TOKEN, accessToken, { path: '/' });
      cookies.set(REFRESH_TOKEN, refreshToken, { path: '/' });
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      setAuthenticated(true);
      navigate('/');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const logout = () => {
    cookies.remove(ACCESS_TOKEN, { path: '/' });
    cookies.remove(REFRESH_TOKEN, { path: '/' });
    setAccessToken('');
    setRefreshToken('');
    setAuthenticated(false);
    navigate('/login');
  };

  return {
    accessToken,
    refreshToken,
    api,
    authenticated,
    login,
    logout,
  };
}
