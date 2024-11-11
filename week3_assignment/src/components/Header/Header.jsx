import React from 'react';
import styled from '@emotion/styled';
import LevelSelect from '../Game/LevelSelect';
import Timer from '../Game/Timer';

function Header({ selectedButton, onChangeView, level, setLevel, gameState, time }) {
  return (
    <HeaderContainer>
      <div><h2>1 to 50</h2></div>
      <div>
        <MenuButton active={selectedButton === '게임'} onClick={() => onChangeView('게임')}>게임</MenuButton>
        <MenuButton active={selectedButton === '랭킹'} onClick={() => onChangeView('랭킹')}>랭킹</MenuButton>
      </div>
      {selectedButton === '게임' && (
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <LevelSelect level={level} onLevelChange={setLevel} />
          <Timer time={time} /> {/* time 전달 */}
        </div>
      )}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #1c2a35;
  color: #fff;
`;

const MenuButton = styled.button`
  background-color: ${props => (props.active ? '#3d887e' : '#1c2a35')}; 
  color: #fff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #3d887e;
  }
`;
