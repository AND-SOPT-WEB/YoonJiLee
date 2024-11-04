import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/Game/GameBoard';
import Ranking from './components/Ranking/Ranking';

function App() {
  const [view, setView] = useState('game');
  const[level, setLevel]= useState(1); // Level 상태 추가

  return (
    <div>
      <Header view={view} onChangeView={setView} level={level} setLevel={setLevel} />
      {view === 'game' ? <GameBoard level={level} setLevel={setLevel} /> : <Ranking />}
    </div>
  );
}

export default App;
