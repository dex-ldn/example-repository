import { createContext } from 'react';
import { AxiosInstance } from 'axios';

export type AuthContextType = {
  authenticated: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  api: AxiosInstance | null;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = AuthContext.Provider;
