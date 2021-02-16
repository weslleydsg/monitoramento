import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { LoadOverlayProvider } from './contexts/loadOverlay';

import Routes from './routes';

import { Wrapper } from './routes/styles';
import GlobalStyle from './styles/global';

import { useTheme } from './contexts/theme';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

const App: React.FC = () => {
  const { themeName } = useTheme();

  return (
    <Router>
      <Wrapper>
        <ThemeProvider theme={themeName === 'light' ? light : dark}>
          <LoadOverlayProvider>
            <Header />
            <Routes />
          </LoadOverlayProvider>
        </ThemeProvider>
      </Wrapper>
      <GlobalStyle />
    </Router>
  );
};

export default App;
