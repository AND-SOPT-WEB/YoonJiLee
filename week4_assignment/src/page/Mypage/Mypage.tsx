// src/page/Mypage/Mypage.tsx
import { useState } from 'react';
import styled from 'styled-components';
import Hobby from './Hobby';
import Info from './Info';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const [tab, setTab] = useState<'hobby' | 'info'>('hobby');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Token 저장 위치 자율
    alert('로그아웃 성공');
    navigate('/login');
  };

  return (
    <Container>
      <Header>
        <Tab onClick={() => setTab('hobby')} active={tab === 'hobby'}>
          취미
        </Tab>
        <Tab onClick={() => setTab('info')} active={tab === 'info'}>
          내 정보
        </Tab>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Header>
      {tab === 'hobby' ? <Hobby /> : <Info />}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Tab = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  background-color: ${({ active, theme }) => (active ? theme.colors.primary : 'white')};
  color: ${({ active, theme }) => (active ? 'white' : theme.colors.primary)};
  border: none;
  cursor: pointer;
`;

const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

export default Mypage;
