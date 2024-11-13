import React from 'react';
import styled from 'styled-components';

interface MyPageHeaderProps {
  activeTab: 'hobby' | 'info';
  setActiveTab: (tab: 'hobby' | 'info') => void;
}

const MyPageHeader: React.FC<MyPageHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <Header>
      <Tab
        onClick={() => setActiveTab('hobby')}
        isActive={activeTab === 'hobby'}
      >
        취미
      </Tab>
      <Tab
        onClick={() => setActiveTab('info')}
        isActive={activeTab === 'info'}
      >
        내 정보
      </Tab>
    </Header>
  );
};

export default MyPageHeader;

const Header = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
`;

const Tab = styled.button<{ isActive: boolean }>`
  flex: 1;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.accentColor: theme.colors.mainColor};
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
