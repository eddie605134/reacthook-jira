import { useAuth } from 'context/auth-context';
import React, { FormEvent } from 'react';

export const RegisterScreen = () => {

  const { register, user } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value;
    register({username, password})
  }

  return <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">name</label>
      <input type="text" id={'username'} />
    </div>
    <div className="">
    <label htmlFor="password">password</label>
      <input type="password" id={'password'} />
    </div>
    <button type="submit">
      註冊
    </button>
  </form>
}