import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from '@/constants';
import { ThemeProvider } from '@emotion/react';
import GlobalStyles from '@GeneralComponents/GlobalStyles';
import App from '@/components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
