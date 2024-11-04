import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>닫기</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
