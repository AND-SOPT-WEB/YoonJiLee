import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Modal from "../Modal/Modal";
import { createPortal } from "react-dom";

const GameBoard = ({ level, startGame, endGame }) => {
  const gridNumber = level + 2; // 3x3, 4x4, 5x5 설정
  const halfNumber = gridNumber ** 2; // 초기 표시 숫자 수
  const maxNumber = halfNumber * 2; // 전체 숫자 범위 (1 ~ maxNumber)

  const initialNumbers = Array.from({ length: halfNumber }, (_, i) => i + 1);
  const additionalNumbers = Array.from({ length: halfNumber }, (_, i) => i + halfNumber + 1);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const [nextNumber, setNextNumber] = useState(1);
  const [numbers, setNumbers] = useState(() => shuffleArray([...initialNumbers]));
  const [newNumbers, setNewNumbers] = useState(() => shuffleArray([...additionalNumbers]));
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setNextNumber(1);
    setNumbers(shuffleArray([...initialNumbers]));
    setNewNumbers(shuffleArray([...additionalNumbers]));
  }, [level]);

  const handleNumberClick = (num, index) => {
    if (num === nextNumber) {
      if (num === 1) startGame(); // 첫 클릭 시 타이머 시작
      if (nextNumber === maxNumber) {
        endGame(); // 마지막 숫자 클릭 시 게임 종료
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

  const closeModal = () => {
    setShowModal(false);
    setNextNumber(1);
    setNumbers(shuffleArray([...initialNumbers]));
    setNewNumbers(shuffleArray([...additionalNumbers]));
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
          <Modal onClose={closeModal} />,
          document.getElementById("modal-root")
        )
      }
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
  background-color: ${({ num, halfNumber }) => (num > halfNumber ? "var(--red)" : "var(--orange)")};
  color: white;
  cursor: pointer;
  color:black;

  &:active {
    opacity: 0.3;
  }
`;
