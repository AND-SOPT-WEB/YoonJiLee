import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

function Modal({ time = 0, onClose }) {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalContent>
        <span>게임 종료!</span>
        <span>기록: {time.toFixed(2)}초</span>
        <button onClick={onClose}>닫기</button>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
}

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 16rem;
  height: 12rem;
  border-radius: 5px;
  background: white;
  text-align: center;
  padding: 1rem;

  span {
    font-size: 1.5rem;
    color: black;
  }

button {
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  border-radius: 0; /* 둥근 모서리를 없앰 */
  background-color: var(--red);
  color: black;
  border: 2px solid black; 
  cursor: pointer;
  margin-top:1.5rem;
}

`;
