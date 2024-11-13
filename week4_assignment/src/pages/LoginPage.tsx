import React from 'react';
import Login from '../components/Login/LoginForm';
import styled from 'styled-components';

const LoginPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>로그인</Title>
      <Login />
      <InfoText>
        아직 회원이 아니신가요? <a href="/join">회원가입</a>
      </InfoText>
    </PageContainer>
  );
};

export default LoginPage;


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: white;
`;

const InfoText = styled.p`
  margin-top: 20px;
  color: white;
`;
