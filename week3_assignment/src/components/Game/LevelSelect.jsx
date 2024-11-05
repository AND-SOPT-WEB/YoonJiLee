import React from 'react';
import styled from '@emotion/styled';

const Select = styled.select`
  margin-right: 10px;
  padding: 5px;
  background-color: #1c2a35;
  color: #fff;
  border: none;
  font-size: 16px;
`;

function LevelSelect({ onLevelChange }) {
  return (
    //이벤트 객체 e를 onLevelChange(e.target.value)로 전달
    <Select onChange={(e) => onLevelChange(e.target.value)}> 
      <option value={1}>Level 1</option>
      <option value={2}>Level 2</option>
      <option value={3}>Level 3</option>
    </Select>
  );
}

export default LevelSelect;
