import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const JoinHobby: React.FC = () => {
  const [hobby, setHobby] = useState('');

  const handleSignUp = async () => {
    try {
      await axios.post('/api/signup', { hobby });
      alert('회원가입 성공!');
    } catch {
      alert('회원가입 실패');
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
  width: 18.75rem; /* 300px */
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
