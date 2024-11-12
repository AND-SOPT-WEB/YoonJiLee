// src/page/Join/Join.tsx
import { useState } from 'react';
import styled from 'styled-components';
import JoinId from './JoinId';
import JoinPw from './JoinPw';
import JoinHobby from './JoinHobby';

const Join = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hobby, setHobby] = useState('');

  const nextStep = () => setStep(step + 1);

  return (
    <Container>
      <Title>회원가입</Title>
      {step === 1 && <JoinId name={name} setName={setName} nextStep={nextStep} />}
      {step === 2 && <JoinPw password={password} setPassword={setPassword} nextStep={nextStep} />}
      {step === 3 && <JoinHobby hobby={hobby} setHobby={setHobby} />}
      <Footer>이미 회원이신가요? <LoginLink href="/login">로그인</LoginLink></Footer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content:center;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Footer = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;

const LoginLink = styled.a`
  color: #888;
  text-decoration: underline;
`;

export default Join;
