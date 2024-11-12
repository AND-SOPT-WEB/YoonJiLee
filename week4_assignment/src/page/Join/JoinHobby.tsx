// src/page/Join/JoinHobby.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface JoinHobbyProps {
  hobby: string;
  setHobby: (value: string) => void;
}

const JoinHobby: React.FC<JoinHobbyProps> = ({ hobby, setHobby }) => {
  const navigate = useNavigate();

  const handleRegister = () => {
    if (hobby) {
      alert(`회원가입 성공! 회원번호: 12345`);
      navigate('/login');
    } else {
      alert('취미를 입력해주세요.');
    }
  };

  return (
    <div>
      <label>취미</label>
      <input
        type="text"
        placeholder="취미"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={handleRegister} disabled={!hobby || hobby.length > 8}>
        회원가입
      </button>
      {hobby.length > 8 && <span>취미는 8자 이내로 입력해주세요.</span>}
    </div>
  );
};

export default JoinHobby;
