// src/page/Mypage/Info.tsx
import { useState } from 'react';

const Info = () => {
  const [password, setPassword] = useState('');
  const [newHobby, setNewHobby] = useState('');

  const handleUpdate = () => {
    if (!password && !newHobby) {
      alert('비밀번호 또는 취미를 입력해주세요.');
      return;
    }

    if (password) {
      // 비밀번호 변경 로직 (예: Axios API 호출)
      alert('비밀번호가 변경되었습니다.');
    }

    if (newHobby) {
      // 취미 변경 로직 (예: Axios API 호출)
      alert(`취미가 ${newHobby}로 변경되었습니다.`);
    }

    setPassword('');
    setNewHobby('');
  };

  return (
    <div>
      <h2>내 정보</h2>
      <input
        type="password"
        placeholder="새 비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="새 취미"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
      />
      <button onClick={handleUpdate}>변경</button>
    </div>
  );
};

export default Info;
