import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/Game/GameBoard';

function App() {
  const [level, setLevel] = useState(1);
  const [view, setView] = useState('게임'); // '게임' 또는 '랭킹' 뷰 선택
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [time, setTime] = useState(0); // 타이머 상태 추가

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel); // level을 업데이트하면 GameBoard도 이에 따라 그리드가 변경되게
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
        time={time} // 타이머 시간 전달
      />
      {view === '게임' && (
        <GameBoard
          level={level}
          startGame={startGame}
          endGame={endGame}
          setTime={setTime} // 시간 업데이트 함수 전달
          time={time} // GameBoard에도 time 전달
        />
      )}
    </div>
  );
}

export default App;
