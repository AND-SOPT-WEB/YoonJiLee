import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/Game/GameBoard';

function App() {
  const [level, setLevel] = useState(1);
  const [view, setView] = useState('game'); // 'game' 또는 'ranking' 뷰 선택
  const [isGameRunning, setIsGameRunning] = useState(false);

  const handleLevelChange = (newLevel) => {
    setLevel(newLevel); // level을 업데이트하면 GameBoard도 이에 따라 그리드가 변경되게
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const startGame = () => {
    setIsGameRunning(true);
    console.log("Game started!");
    // 타이머 시작 등의 추가 로직을 작성할 수 있습니다.
  };

  const endGame = () => {
    setIsGameRunning(false);
    console.log("Game ended!");
    // 타이머 종료 등의 추가 로직을 작성할 수 있습니다.
  };

  return (
    <div>
      <Header view={view} onChangeView={handleViewChange} level={level} setLevel={handleLevelChange} />
      {view === 'game' && <GameBoard level={level} startGame={startGame} endGame={endGame} />}
    </div>
  );
}

export default App;
