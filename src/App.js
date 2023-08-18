import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'src/config/theme.config';
import { _$ResetStyle } from 'src/_style/_$ResetStyle';
import MainPage from 'src/feature/mainPage/MainPage';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <_$ResetStyle />
      <MainPage />
    </ThemeProvider>
  );
};

export default App;
