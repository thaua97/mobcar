import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import DefaultTheme from './styles/themes/default';

import { ToastContainer } from 'react-toastify';

import Home from './pages/Home';

const App = () => {
  const [theme, setTheme] = useState(DefaultTheme);

  useEffect(() => {
    getTheme();
  }, [])

  const getTheme = () => setTheme(DefaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  );
}

export default App;
