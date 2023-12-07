import React, { useContext } from 'react';
import FormInput from '../edit/FormInput';

import './Login.css';
import { AuthContext } from '../../context/AuthContext';

interface FormData extends HTMLFormElement {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

export default function LoginForm() {
  const authContext = useContext(AuthContext);
  if (!authContext) return;
  const { login } = authContext;

  const loginUser = async (event: React.ChangeEvent<FormData>) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    await login(email, password);
  };

  return (
    <form className="loginForm" onSubmit={loginUser}>
      <FormInput label="Email" value="" name="email" type="email" />
      <FormInput label="Password" value="" type="password" name="password" />
      <button className="button is-medium is-success" type="submit">
        Login
      </button>
    </form>
  );
}
