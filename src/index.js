import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';
import { ThemeProvider } from "@mui/material/styles";
import { theme } from './theme';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
     <Provider store={store}>
    <App/>
  </Provider>
  </React.StrictMode>
  </ThemeProvider>
);


reportWebVitals();
