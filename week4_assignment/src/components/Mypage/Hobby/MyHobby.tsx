import React, { useState, useEffect } from 'react';
import { getMyHobby } from '../../../apis/user'; // 정확한 경로 확인

const MyHobby: React.FC = () => {
  const [userId, setUserId] = useState(''); 
  const [hobby, setHobby] = useState<string | null>(null);

  useEffect(() => {
    const fetchHobby = async () => {
      try {
        const userHobby = await getMyHobby(userId); 
        setHobby(userHobby);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setHobby(null);
      }
    };

    fetchHobby();
  }, [userId]);

  const handleSearch = async () => {
    try {
      const userHobby = await getMyHobby(userId);
      setHobby(userHobby);
    } catch (error) {
      console.error('사용자 취미 검색 오류:', error);
      alert('취미를 찾을 수 없습니다.');
    }
  };

  return (
    <div>
      <h3>나의 취미</h3>
      <p>{hobby ? hobby : '취미가 없습니다'}</p>

      <input
        type="text"
        placeholder="사용자 번호"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default MyHobby;
