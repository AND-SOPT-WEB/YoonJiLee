import { useState } from "react";
import Header from "./components/Header/Header";
import GameBoard from "./components/Game/GameBoard";
import Ranking from "./components/Ranking/Ranking";

function App() {
  const [selectedButton, setSelectedButton] = useState("게임"); // '게임' 또는 '랭킹' 선택
  const [level, setLevel] = useState(1);
  const [gameState, setGameState] = useState({ start: false, reset: false });

  const startGame = () => {
    setGameState({ start: true, reset: false });
    console.log("Game started!");
  };

  const endGame = () => {
    setGameState({ start: false, reset: false });
    console.log("Game ended!");
  };

  const resetGame = () => {
    setGameState({ start: false, reset: true });
    console.log("Game reset!");
  };

  return (
    <>
      <Header
        selectedButton={selectedButton}
        onChangeView={setSelectedButton}
        level={level}
        setLevel={setLevel}
        resetGame={resetGame}
        gameState={gameState}
      />
      {selectedButton === "게임" ? (
        <GameBoard level={level} startGame={startGame} endGame={endGame} />
      ) : (
        <Ranking />
      )}
    </>
  );
}

export default App;
