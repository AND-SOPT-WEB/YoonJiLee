import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        <p>게임 종료!</p>
        <button onClick={onClose}>확인</button>
      </ModalContent>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
}

export default Modal;
