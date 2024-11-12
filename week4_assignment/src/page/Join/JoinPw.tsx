// src/page/Join/JoinPw.tsx
import React, { useState } from 'react';

interface JoinPwProps {
  password: string;
  setPassword: (value: string) => void;
  nextStep: () => void;
}

const JoinPw: React.FC<JoinPwProps> = ({ password, setPassword, nextStep }) => {
  const [confirmPassword, setConfirmPassword] = useState('');

  const isButtonDisabled = !password || password !== confirmPassword || password.length > 8;

  return (
    <div>
      <label>비밀번호</label>
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호 확인"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={nextStep} disabled={isButtonDisabled}>
        다음
      </button>
      {password !== confirmPassword && <span>비밀번호가 일치하지 않습니다.</span>}
      {password.length > 8 && <span>비밀번호는 8자 이내로 입력해주세요.</span>}
    </div>
  );
};

export default JoinPw;
