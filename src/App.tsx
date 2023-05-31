import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Login } from './feature/login/Login';
import { Home } from './feature/home/Home';
import { AuthLayout } from './layouts/AuthLayout';
import { Management } from './feature/management/Management';
import { Tools } from './feature/tools/Tools';
import { CommonLayout } from './layouts/CommontLayout';
import { useUser } from './hooks/useUser';

export function App() {
  const { user } = useUser();

  return (
    <div className="App">
      <Routes>
        <Route element={<CommonLayout isAllowed={!!user} />}>
          <Route path="login" element={<Login />} />
          <Route
            element={<AuthLayout isAllowed={!!user} redirectPath="/login" />}
          >
            <Route path="home" element={<Home />} />
          </Route>

          <Route
            element={<AuthLayout isAllowed={!!user} redirectPath="/home" />}
          >
            <Route path="management" element={<Management />} />
            <Route path="tools" element={<Tools />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
