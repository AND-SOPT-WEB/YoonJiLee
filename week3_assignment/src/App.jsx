import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/Game/GameBoard';
import Ranking from './components/Ranking/Ranking';

function App() {
  const [level, setLevel] = useState(1);
  const [view, setView] = useState('게임');
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [time, setTime] = useState(0);

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel);
    setIsGameRunning(false); // 게임 초기화
    setTime(0); // 타이머 초기화
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const startGame = () => {
    setIsGameRunning(true);
    console.log("Game started!");
  };

  const endGame = () => {
    setIsGameRunning(false);
    console.log("Game ended!");
  };

  return (
    <div>
      <Header 
        selectedButton={view} 
        onChangeView={handleViewChange} 
        level={level} 
        setLevel={handleLevelChange} 
        gameState={{ start: isGameRunning }} 
        time={time}
      />
      {view === '게임' && (
        <GameBoard
          key={level} // 레벨 변경 시 컴포넌트 초기화
          level={level}
          startGame={startGame}
          endGame={endGame}
          setTime={setTime}
          time={time}
        />
      )}
      {view === '랭킹' && <Ranking />} {/* 랭킹 컴포넌트 */}
    </div>
  );
}

export default App;
