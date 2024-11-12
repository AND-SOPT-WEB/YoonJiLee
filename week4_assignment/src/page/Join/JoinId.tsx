// src/page/Join/JoinId.tsx
import React from 'react';

interface JoinIdProps {
  name: string;
  setName: (value: string) => void;
  nextStep: () => void;
}

const JoinId: React.FC<JoinIdProps> = ({ name, setName, nextStep }) => {
  return (
    <div>
      <label>이름</label>
      <input
        type="text"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={nextStep} disabled={!name || name.length > 8}>
        다음
      </button>
      {name.length > 8 && <span>이름은 8자 이내로 입력해주세요.</span>}
    </div>
  );
};

export default JoinId;
