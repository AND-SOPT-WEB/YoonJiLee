// src/page/Mypage/Hobby.tsx
import { useState } from 'react';

const Hobby = () => {
  const [userId, setUserId] = useState('');
  const [hobby, setHobby] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const handleSearch = () => {
    if (!userId) {
      setError(true);
      alert('사용자 번호를 입력해주세요.');
      return;
    }
    
    // 여기에 실제 검색 로직 추가 (예: Axios API 호출)
    if (userId === '123') {
      setHobby('축구');
      setError(false);
    } else {
      setHobby(null);
      setError(true);
      alert('검색 결과가 없습니다.');
    }
  };

  return (
    <div>
      <h2>나의 취미</h2>
      <input
        type="text"
        placeholder="사용자 번호 입력"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
      {hobby && <p>취미: {hobby}</p>}
      {error && <p>검색 결과가 없습니다.</p>}
    </div>
  );
};

export default Hobby;
