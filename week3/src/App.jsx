import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/Game/GameBoard';
import RankingBoard from './components/Ranking/Ranking';

function App() {
  const [view, setView] = useState('game');

  return (
    <div className="App">
      <Header view={view} setView={setView} />
      {view === 'game' ? <GameBoard /> : <RankingBoard />}
    </div>
  );
}

export default App;
