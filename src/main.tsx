import { StrictMode } from 'react';
import { ThemeProvider } from '@/components/theme-provider.tsx';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { persistor, store } from '@/lib/store';

import './index.css';

import { PersistGate } from 'redux-persist/integration/react';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
