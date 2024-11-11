import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Modal from "../Modal/Modal";
import { createPortal } from "react-dom";

const GameBoard = ({ level, startGame, endGame, setTime, time }) => {
  // level 값을 숫자형으로 변환
  const numericLevel = parseInt(level, 10);
  const gridNumber = numericLevel === 1 ? 3 : numericLevel === 2 ? 4 : 5; // 레벨에 따라 3x3, 4x4, 5x5 설정
  const halfNumber = gridNumber ** 2; 
  const maxNumber = halfNumber * 2; 

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const [nextNumber, setNextNumber] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [newNumbers, setNewNumbers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // 타이머 업데이트
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 0.01);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, setTime]);

  // 레벨 변경 시 게임 초기화
  useEffect(() => {
    const initialNumbers = Array.from({ length: halfNumber }, (_, i) => i + 1);
    const additionalNumbers = Array.from({ length: halfNumber }, (_, i) => i + halfNumber + 1);

    setNextNumber(1);
    setNumbers(shuffleArray([...initialNumbers]));
    setNewNumbers(shuffleArray([...additionalNumbers]));
    setTime(0); // 타이머 초기화
    setIsRunning(false); // 타이머 중지
  }, [numericLevel, halfNumber, setTime]);

  const handleNumberClick = (num, index) => {
    if (num === nextNumber) {
      if (num === 1) {
        startGame();
        setIsRunning(true); // 타이머 시작
      }
      if (nextNumber === maxNumber) {
        endGame(); // 게임 종료
        saveRanking(); // 랭킹 저장
        setIsRunning(false); // 타이머 중지
        setShowModal(true); // 모달 표시
        return;
      }

      setNextNumber((prev) => prev + 1);
      const updatedNumber = newNumbers.length > 0 ? newNumbers.pop() : null;
      setNumbers((prev) => {
        const updatedNumbers = [...prev];
        updatedNumbers[index] = updatedNumber;
        return updatedNumbers;
      });
    }
  };

  const saveRanking = () => {
    const timestamp = new Date().getTime(); // 현재 시각
    const levelData = numericLevel; // 게임의 레벨
    const playTime = time.toFixed(2); // 플레이 시간

    // 저장할 데이터 구조
    const newRankingEntry = {
      timestamp,
      level: levelData,
      time: playTime,
    };

    // 기존 랭킹 데이터 가져오기
    const existingRankings = JSON.parse(localStorage.getItem("rankingData")) || [];
    
    // 새로운 데이터 추가
    existingRankings.push(newRankingEntry);
    
    // 랭킹 데이터 정렬 (레벨 내림차순, 시간 오름차순)
    existingRankings.sort((a, b) => {
      return b.level === a.level ? parseFloat(a.time) - parseFloat(b.time) : b.level - a.level;
    });

    // 랭킹 데이터를 localStorage에 저장
    localStorage.setItem("rankingData", JSON.stringify(existingRankings));
  };

  const closeModal = () => {
    setShowModal(false);
    setTime(0); // 타이머 초기화
  };

  return (
    <Container>
      <h2>다음 숫자 : {nextNumber}</h2>
      <Grid gridNumber={gridNumber}>
        {numbers.map((num, index) =>
          num ? (
            <NumberButton
              key={index}
              onClick={() => handleNumberClick(num, index)}
              num={num}
              halfNumber={halfNumber}
            >
              {num}
            </NumberButton>
          ) : (
            <DefaultButton key={index} />
          )
        )}
      </Grid>
      {showModal &&
        createPortal(
          <Modal time={time} onClose={closeModal} />, // time prop 전달
          document.getElementById("modal-root")
        )}
    </Container>
  );
};

export default GameBoard;

const Container = styled.section`
  margin: 8rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: fit-content;
  font-size: 1.6rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ gridNumber }) => gridNumber}, 1fr);
  gap: 1rem;
`;

const DefaultButton = styled.button`
  width: 6rem;
  height: 6rem;
`;

const NumberButton = styled(DefaultButton)`
  font-size: 2rem;
  background-color: ${({ num, halfNumber }) => (num > halfNumber ? "var(--green)" : "var(--blue)")};
  color: white;
  cursor: pointer;

  &:active {
    opacity: 0.3;
  }
`;
