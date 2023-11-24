import { createContext } from "react";

export const AuthContext = createContext({
    authenticated: false,
    accessToken: '',
    refreshToken: '',
    login: () => {},
    logout: () => {},
    api: null,
});

export const AuthProvider = AuthContext.Provider;