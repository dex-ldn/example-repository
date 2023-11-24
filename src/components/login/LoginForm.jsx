import React, { useContext } from 'react';

import './Login.css';
import { AuthContext } from '../../context/AuthContext';

export default function LoginForm() {
    const { login } = useContext(AuthContext);

    const loginUser = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await login(email, password)
    }

    return (
        <form onSubmit={loginUser}>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email"/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"/>
            <button type='submit'>Login</button>
        </form>
    );
}