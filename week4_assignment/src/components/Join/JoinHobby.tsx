import React, { useState } from 'react';
import axios from 'axios';

const JoinHobby: React.FC = () => {
  const [hobby, setHobby] = useState('');

  const handleSignUp = async () => {
    try {
      await axios.post('/api/signup', { hobby });
      alert('회원가입 성공!');
    } catch {
      alert('회원가입 실패');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="취미"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={handleSignUp} disabled={!hobby}>
        회원가입
      </button>
    </div>
  );
};

export default JoinHobby;
