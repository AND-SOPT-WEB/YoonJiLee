import React, { useState } from 'react';

interface Props {
  nextStep: () => void;
}

const JoinPw: React.FC<Props> = ({ nextStep }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNext = () => {
    if (password === confirmPassword) nextStep();
    else alert('비밀번호가 일치하지 않습니다.');
  };

  return (
    <div>
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
      <button onClick={handleNext} disabled={!password || !confirmPassword}>
        다음
      </button>
    </div>
  );
};

export default JoinPw;
