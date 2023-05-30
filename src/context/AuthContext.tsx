import * as React from 'react';
import { createContext, ReactNode, useMemo, useState } from 'react';

type Props = {
  children: ReactNode;
};

interface AuthenticationContext {
  user: any;
  setUser: (user: any) => void;
}

const initialValue = {
  user: JSON.parse(sessionStorage.getItem('userData')) || null,
  setUser: () => {},
};

const AuthContext = createContext<AuthenticationContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState(initialValue.user);

  const value = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
