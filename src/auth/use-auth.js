import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useCookies } from "react-cookie";

export default function useAuth() {
    const [cookies, setCookies, removeCookies] = useCookies(['apprelevant']);
    const [accessToken, setAccessToken] = useState(cookies.accessToken);
    const [refreshToken, setRefreshToken] = useState(cookies.refreshToken);
    const [authenticated, setAuthenticated] = useState(!!accessToken)

    const api = axios.create({
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            }
    });

    api.interceptors.response.use((response) => response, error => {
        console.log("interceptor!")
        console.log('error: ', error);
    })



    const navigate = useNavigate();

    const login = async (email, password) => {
        if (authenticated) return;

        const url = 'https://auth-service-dev-07a2665f1f66.herokuapp.com/v1/auth/login/email'
        try {
            const { data } = await api.post(
                url, 
                {email, password}, 

            );
            const { accessToken, refreshToken } = data;

            setCookies('accessToken', accessToken, { path: '/'});
            setAccessToken(accessToken);
            setCookies('refreshToken', refreshToken, { path: '/'});
            setRefreshToken(refreshToken)
            setAuthenticated(true);
            navigate('/');

        } catch (error) {
            console.log("error: ", error);
        }
    }

    const logout = () => {
        removeCookies('accessToken', {path: '/'});
        setAccessToken('');
        removeCookies('refreshToken', {path: '/'});
        setRefreshToken('');
        setAuthenticated(false);
        navigate('/login')
    }

    return {
        accessToken,
        api,
        authenticated,
        login,
        logout,
        refreshToken,
    }
}