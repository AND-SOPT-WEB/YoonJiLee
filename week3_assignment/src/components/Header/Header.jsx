import React from 'react';
import styled from '@emotion/styled';
import LevelSelect from '../Game/LevelSelect';
import Timer from '../Game/Timer';

function Header({ view, onChangeView }) {
  return (
    <HeaderContainer>
        <div><h2>1 to 50</h2></div>
      <div>
        <MenuButton active={view === 'game'} onClick={() => onChangeView('game')}>게임</MenuButton>
        <MenuButton active={view === 'ranking'} onClick={() => onChangeView('ranking')}>랭킹</MenuButton>
      </div>
      {view === 'game' && (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto'}}>
          <LevelSelect />
          <Timer />
        </div>
      )}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #1c2a35;
  color: #fff;
`;

const MenuButton = styled.button`
  background-color: ${props => (props.active ? '#3d887e' : '#1c2a35')};
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #3d887e;
  }
`;
