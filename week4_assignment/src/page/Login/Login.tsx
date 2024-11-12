// src/page/Login/Login.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      // Axios를 이용한 로그인 API 요청
      alert('로그인 성공!');
      navigate('/mypage');
    } else {
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>로그인</Button>
      <Button onClick={() => navigate('/join')}>회원가입</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px;
  width: 220px;
  margin-top: 10px;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Login;
