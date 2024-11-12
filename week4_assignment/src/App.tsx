// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login/Login';
import Join from './page/Join/Join';
import Mypage from './page/Mypage/Mypage';
import GlobalStyle from './style/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/mypage" element={<Mypage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
