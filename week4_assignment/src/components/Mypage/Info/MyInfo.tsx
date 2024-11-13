import React, { useState } from 'react';
import axios from 'axios';

const MyInfo: React.FC = () => {
  const [password, setPassword] = useState('');
  const [hobby, setHobby] = useState('');

  const handleUpdate = async () => {
    if (password || hobby) {
      try {
        await axios.put('/api/user/update', { password, hobby });
        alert('정보가 업데이트되었습니다.');
      } catch (error) {
        console.error('정보 업데이트 중 오류 발생:', error);
        alert('정보 업데이트에 실패했습니다.');
      }
    } else {
      alert('변경할 정보를 입력하세요.');
    }
  };

  return (
    <div>
      <h3>내 정보 수정하기</h3>
      <input
        type="password"
        placeholder="새 비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="새 취미"
        value={hobby}
        onChange={(e) => setHobby(e.target.value)}
      />
      <button onClick={handleUpdate}>수정하기</button>
    </div>
  );
};

export default MyInfo;
