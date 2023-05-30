import * as React from 'react';
import { useUser } from '../../hooks/useUser';
export function Login() {
  const { login } = useUser();

  return (
    <div>
      <h1>Login Page </h1>
      <button onClick={login}> login </button>
    </div>
  );
}
