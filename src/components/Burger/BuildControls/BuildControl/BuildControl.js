import React from 'react';
import styled from 'styled-components';

const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  button {
    display: block;
    border-radius: 15px;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #555;
    cursor: pointer;
    outline: none;
    :disabled {
      cursor: not-allowed;
    }
  }
`;
const Label = styled.div`
  color: white;
  width: 80px;
  font-weight: bold;
`;

const buildControl = props => {
  return (
    <BuildControl>
      <Label>{props.label}</Label>
      <button
        onClick={() => props.removeIngridient(props.type)}
        disabled={props.disabled}>
        Less
      </button>
      <button onClick={() => props.addIngridient(props.type)}>More</button>
    </BuildControl>
  );
};

export default buildControl;
