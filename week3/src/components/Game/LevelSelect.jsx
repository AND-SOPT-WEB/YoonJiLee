import React from 'react';
import styled from "@emotion/styled";

function LevelSelect() {
  return (
    <LevelContainer>
      <StyledSelect>
        <option value="1">Level 1</option>
        <option value="2">Level 2</option>
        <option value="3">Level 3</option>
      </StyledSelect>
    </LevelContainer>
  );
}

export default LevelSelect;

const LevelContainer=styled.div`
display:flex;
justify-content:flex-end;
margin: 10px;

`;

const StyledSelect = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;