import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { persistor, store } from '@/lib/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/components/theme-provider.tsx';

import './index.css';
import App from './App.tsx';
import { PersistGate } from 'redux-persist/integration/react';

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
