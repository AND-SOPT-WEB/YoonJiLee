import React from 'react';
import Login from '../components/Login/LoginForm';
import styled from 'styled-components';

const LoginPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>로그인</Title>
      <Login />
      <InfoText>
        아직 회원이 아니신가요? <StyledLink href="/join">회원가입</StyledLink>
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
  padding: 0.625rem; 
`;

const Title = styled.h2`
  margin-bottom: 1.25rem; 
  font-size: 1.5rem; 
  color: ${({ theme }) => theme.colors.textColor || 'black'};
`;

const InfoText = styled.p`
  margin-top: 1.25rem; 
  font-size: 0.875rem; 
  color: ${({ theme }) => theme.colors.textColor || 'black'};
`;

const StyledLink = styled.a`
  color: #888;
  text-decoration: underline;
  &:hover {
    color: #666;
  }
`;
