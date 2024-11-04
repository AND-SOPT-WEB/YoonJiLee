import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import LevelSelect from '../Game/LevelSelect';
import Timer from '../Game/Timer';
import Modal from '../Modal/Modal';

function GameBoard({ level }) {
  const [numbers, setNumbers] = useState([]);
  const [nextNumber, setNextNumber] = useState(1);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    generateNumbers(level);
    resetGame();
  }, [level]);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 0.01);
      }, 10);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    return () => clearInterval(timerRef.current);
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
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  return (
    <BoardContainer>
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
