import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  nextStep: () => void;
  password: string;
  setPassword: (password: string) => void;
}

const JoinPw: React.FC<Props> = ({ nextStep, password, setPassword }) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (password === confirmPassword) {
      nextStep();
    } else {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  return (
    <FormContainer>
      <Input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <NextButton onClick={handleNext} disabled={!password || !confirmPassword}>
        다음
      </NextButton>
    </FormContainer>
  );
};

export default JoinPw;

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

const NextButton = styled.button`
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
