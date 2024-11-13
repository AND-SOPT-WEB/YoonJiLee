import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyPage: React.FC = () => {
  const [view, setView] = useState<'hobby' | 'info'>('hobby');
  const [hobby, setHobby] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newHobby, setNewHobby] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const fetchMyHobby = async () => {
    try {
      const response = await axios.get('http://211.188.53.75:8080/user/hobby', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setHobby(response.data.hobby);
    } catch {
      alert('취미 정보를 불러오는데 실패했습니다.');
    }
  };

  const handleUpdateInfo = async () => {
    try {
      await axios.put(
        'http://211.188.53.75:8080/user',
        { password: newPassword || undefined, hobby: newHobby || undefined },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('정보가 성공적으로 변경되었습니다.');
      if (newHobby) setHobby(newHobby); // 새로운 취미가 있으면 상태 업데이트
    } catch {
      alert('정보 변경에 실패했습니다.');
    }
  };

  return (
    <PageContainer>
      <Header>
        <TabButton onClick={() => setView('hobby')} isActive={view === 'hobby'}>
          취미
        </TabButton>
        <TabButton onClick={() => setView('info')} isActive={view === 'info'}>
          내 정보
        </TabButton>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Header>
      {view === 'hobby' ? (
        <HobbyContainer>
          <Title>나의 취미</Title>
          <HobbyText>{hobby || '취미 정보 없음'}</HobbyText>
          <ActionButton onClick={fetchMyHobby}>취미 조회</ActionButton>
        </HobbyContainer>
      ) : (
        <InfoContainer>
          <Title>내 정보 수정</Title>
          <Input type="password" placeholder="새 비밀번호" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <Input type="text" placeholder="새 취미" value={newHobby} onChange={(e) => setNewHobby(e.target.value)} />
          <ActionButton onClick={handleUpdateInfo}>정보 수정</ActionButton>
        </InfoContainer>
      )}
    </PageContainer>
  );
};

export default MyPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
  border-radius: 8px;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 10px;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.accentColor : theme.colors.mainColor)};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;

const LogoutButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: #ff6b6b;
  }
`;

const HobbyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  margin-top: 20px;
`;

const InfoContainer = styled(HobbyContainer)``;

const Title = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 20px;
`;

const HobbyText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 15px;
  outline: none;

  &:focus {
    border-color: #3b82f6;
  }
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
