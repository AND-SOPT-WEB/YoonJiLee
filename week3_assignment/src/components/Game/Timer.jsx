import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

const TimerDisplay = styled.div`
  font-size: 16px;
  color: #fff;
`;

function Timer({ isRunning }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const timerId = setInterval(() => {
      setTime(prevTime => prevTime + 0.01);
    }, 10);

    return () => clearInterval(timerId);
  }, [isRunning]);

  return <TimerDisplay>{time.toFixed(2)}</TimerDisplay>;
}

export default Timer;
