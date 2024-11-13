import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅으로 navigate 함수 생성

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://211.188.53.75:8080/login', { username, password });
      const token = response.data.token;
      localStorage.setItem('token', token);
      alert('로그인 성공');
      navigate('/mypage'); // 로그인 성공 시 마이페이지로 이동
    } catch {
      alert('로그인 실패');
    }
  };

  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="아이디"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} disabled={!username || !password}>
        로그인
      </Button>
    </FormContainer>
  );
};

export default LoginForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18.75rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem; 
  font-size: 1rem; 
  border: 0.063rem solid #ddd; 
  border-radius: 0.25rem; 
  margin-bottom: 1.25rem; 
  outline: none;
  &:focus {
    border-color: #3b82f6; 
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem; 
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: white;
  border: none;
  border-radius: 0.25rem; 
  cursor: pointer;
  transition: background-color 0.3s;
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.background};
    color: black;
  }
`;
