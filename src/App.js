import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import DefaultTheme from './styles/themes/default';

import Home from './pages/Home';

const App = () => {
  const [theme, setTheme] = useState(DefaultTheme);

  useEffect(() => {
    getTheme();
  }, [])

  const getTheme = () => setTheme(DefaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home/>
    </ThemeProvider>
  );
}

export default App;
