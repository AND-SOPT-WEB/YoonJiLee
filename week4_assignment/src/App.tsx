import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MyPage from './pages/MyPage';

function App() {
  const token = localStorage.getItem('token');
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/mypage" element={token ? <MyPage /> : <Navigate to="/login" />} />
        <Route path="/" element={<Navigate to={token ? "/mypage" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
