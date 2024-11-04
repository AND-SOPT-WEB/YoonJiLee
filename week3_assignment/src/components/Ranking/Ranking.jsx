import React, { useState, useEffect } from 'react';

function Ranking() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const savedRankings = JSON.parse(localStorage.getItem('rankings')) || [];
    setRankings(savedRankings.sort((a, b) => a.time - b.time));
  }, []);

  const resetRanking = () => {
    localStorage.removeItem('rankings');
    setRankings([]);
  };

  return (
    <div className="ranking-board">
      <h2>랭킹 보드</h2>
      <button onClick={resetRanking}>초기화</button>
      <ul>
        {rankings.map((record, index) => (
          <li key={index}>
            {record.time}초 - {record.level} 레벨 ({record.date})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ranking;
