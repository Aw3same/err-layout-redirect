import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { WrappedApp } from './App';
import { AuthProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <AuthProvider>
				<WrappedApp />
		</AuthProvider>
  </StrictMode>
);
