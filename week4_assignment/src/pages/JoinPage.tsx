import React, { useState } from 'react';
import JoinNameForm from '../components/Join/JoinId';
import JoinPasswordForm from '../components/Join/JoinPw';
import JoinHobbyForm from '../components/Join/JoinHobby';
import styled from 'styled-components';

const JoinPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);

  return (
    <PageContainer>
      <Title>회원가입</Title>
      {step === 1 && <JoinNameForm nextStep={nextStep} />}
      {step === 2 && <JoinPasswordForm nextStep={nextStep} />}
      {step === 3 && <JoinHobbyForm />}
      <InfoText>
        이미 회원이신가요? <StyledLink href="/login">로그인</StyledLink>
      </InfoText>
    </PageContainer>
  );
};

export default JoinPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const InfoText = styled.p`
  margin-top: 20px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textColor};
`;

const StyledLink = styled.a`
  color: #a1887f;
  text-decoration: underline;
  &:hover {
    color: #7d5a50;
  }
`;
