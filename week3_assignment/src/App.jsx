import React, { useState } from 'react';
import Header from './components/Header/Header';
import GameBoard from './components/Game/GameBoard';
import Ranking from './components/Ranking/Ranking';

function App() {
  const [view, setView] = useState('game');

  return (
    <div>
      <Header view={view} onChangeView={setView} />
      {view === 'game' ? <GameBoard /> : <Ranking />}
    </div>
  );
}

export default App;
