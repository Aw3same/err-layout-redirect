import * as React from 'react';

import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface Props {
  isAllowed: boolean;
  redirectPath: string;
  children?: JSX.Element;
}

export const AuthLayout = ({ isAllowed, redirectPath, children }: Props) => {
  const location = useLocation();

  return isAllowed ? (
    children ?? <Outlet />
  ) : (
    <Navigate to={redirectPath} replace state={{ from: location }} />
  );
};
