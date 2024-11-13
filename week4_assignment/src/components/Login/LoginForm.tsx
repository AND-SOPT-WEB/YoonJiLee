import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('/api/login', { username, password });
      alert('로그인 성공');
    
    } catch {
      alert('로그인 실패');
    }
  };

  return (
    <Form>
      <input type="text" placeholder="아이디" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={handleLogin}>로그인</Button>
    </Form>
  );
};

export default LoginForm;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
