import React from 'react';
import styled from '@emotion/styled';

function Timer({ time =0 }) {
  return <TimerDisplay>{time.toFixed(2)}초</TimerDisplay>;
}

export default Timer;

const TimerDisplay = styled.div`
  font-size: 16px;
  color: #fff;
`;
