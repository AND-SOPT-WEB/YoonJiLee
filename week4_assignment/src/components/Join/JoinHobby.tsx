import React, { useState } from 'react';
import styled from 'styled-components';
import { registerUser } from '../../apis/user';
import { AxiosError } from 'axios';

interface JoinHobbyProps {
  username: string;
  password: string;
}

const JoinHobby: React.FC<JoinHobbyProps> = ({ username, password }) => {
  const [hobby, setHobby] = useState('');

  const handleSignUp = async () => {
    try {
      const requestData = { username, password, hobby };
      await registerUser(requestData);
      alert('회원가입 성공!');
    } catch (err) {
      const error = err as AxiosError; 
      if (error.response && error.response.status === 409) {
        alert('이미 존재하는 사용자 이름입니다. 다른 이름으로 시도해 주세요.');
      } else {
        console.error('회원가입 실패:', error);
        alert('회원가입 실패');
      }
    }
  };
  
  

  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="취미"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
      <SignUpButton onClick={handleSignUp} disabled={!hobby}>
        회원가입
      </SignUpButton>
    </FormContainer>
  );
};

export default JoinHobby;

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

const SignUpButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: #888;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: white;
  }
`;
