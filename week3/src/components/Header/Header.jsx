import React from 'react';
import './Header.css';
import LevelSelect from '../Game/LevelSelect';
import Timer from '../Game/Timer';
import styled from "@emotion/styled";


function Header({ view, setView }) {
  return (
    <StyledHeader>
      <div className="header">
        <button onClick={() => setView('game')}>게임</button>
        <button onClick={() => setView('ranking')}>랭킹</button>
        {view === 'game' && (
          <div className="header-right">
            <LevelSelect />
            <Timer />
          </div>
        )}
      </div>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #;
  border-bottom: 1px solid #ccc;

  .header-right {
    display: flex-end;
    gap: 10px;
  }

  button {
    padding: 8px 12px;
    font-size: 16px;
    cursor: pointer;
  }
`;
