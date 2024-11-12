import React, { useState, useEffect } from 'react';
import { getUserHobby } from '../../../apis/userApi';

const MyHobby: React.FC = () => {
  const [userId, setUserId] = useState(''); 
  const [hobby, setHobby] = useState<string | null>(null);

  useEffect(() => {
    const fetchHobby = async () => {
      try {
        const userHobby = await getUserHobby('yourUserId'); 
        setHobby(userHobby);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setHobby(null);
      }
    };

    fetchHobby();
  }, []);

  const handleSearch = async () => {
    try {
      const userHobby = await getUserHobby(userId);
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
