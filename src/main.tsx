import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { store } from '@/lib/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@/components/theme-provider.tsx';

import './index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
);
