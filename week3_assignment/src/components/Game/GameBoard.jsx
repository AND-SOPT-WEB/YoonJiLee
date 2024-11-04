import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Modal from '../Modal/Modal';
import LevelSelect from './LevelSelect';
import Timer from './Timer';


function GameBoard() {
  const [level, setLevel] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // 레벨이 변경될 때마다 숫자 초기화
    generateNumbers(level);
    resetGame();
  }, [level]);

  useEffect(() => {
    // 타이머 작동
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTimer((prevTime) => prevTime + 0.01);
      }, 10);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  const generateNumbers = (level) => {
    const maxNumber = level === 1 ? 9 : level === 2 ? 16 : 25;
    const initialNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1).sort(() => Math.random() - 0.5);
    setNumbers(initialNumbers);
  };

  const handleNumberClick = (number) => {
    if (number === nextNumber) {
      if (number === 1) {
        setIsRunning(true); // 타이머 시작
        setTimer(0); // 타이머 초기화
      }
      setNextNumber(nextNumber + 1);
      if (number === numbers.length) {
        setIsRunning(false);
        setShowModal(true);
      }
    }
  };

  const resetGame = () => {
    setNextNumber(1);
    setTimer(0);
    setIsRunning(false);
    setShowModal(false);
  };

  return (
    <BoardContainer>
      <LevelSelect onLevelChange={(level) => setLevel(parseInt(level))} />
      <h2>다음 숫자: {nextNumber}</h2>
      <Timer time={timer} isRunning={isRunning} />
      <NumberGrid size={Math.sqrt(numbers.length)}>
        {numbers.map((num, idx) => (
          <NumberButton key={idx} onClick={() => handleNumberClick(num)}>{num}</NumberButton>
        ))}
      </NumberGrid>
      {showModal && <Modal onClose={resetGame} message={`걸린 시간: ${timer.toFixed(2)}초`} />}
    </BoardContainer>
  );
}

export default GameBoard;

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.size}, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const NumberButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #3d887e;
  color: #fff;
  font-size: 18px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2e6d5b;
  }
`;
