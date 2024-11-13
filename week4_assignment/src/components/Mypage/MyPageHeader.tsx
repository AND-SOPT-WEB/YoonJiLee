import React from 'react';
import styled from 'styled-components';

interface MyPageHeaderProps {
  activeTab: 'hobby' | 'info';
  setActiveTab: (tab: 'hobby' | 'info') => void;
}

const MyPageHeader: React.FC<MyPageHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <HeaderContainer>
      <TabButton onClick={() => setActiveTab('hobby')} isActive={activeTab === 'hobby'}>
        취미
      </TabButton>
      <TabButton onClick={() => setActiveTab('info')} isActive={activeTab === 'info'}>
        내 정보
      </TabButton>
    </HeaderContainer>
  );
};

export default MyPageHeader;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  background-color: ${({ isActive, theme }) => (isActive ? theme.colors.accentColor : theme.colors.mainColor)};
  color: white;
  padding: 10px;
  font-size: 16px;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
