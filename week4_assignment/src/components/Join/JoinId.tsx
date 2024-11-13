import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  nextStep: () => void;
}

const JoinId: React.FC<Props> = ({ nextStep }) => {
  const [name, setName] = useState('');

  const handleNext = () => {
    if (name.length <= 8) nextStep();
    else alert('아이디는 8자 이하여야 합니다');
  };

  return (
    <FormContainer>
      <Input
        type="text"
        placeholder="아이디"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <NextButton onClick={handleNext} disabled={!name}>
        다음
      </NextButton>
    </FormContainer>
  );
};

export default JoinId;


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
  margin-bottom: 1.25rem; /
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
