import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  width: 100px;
  border-radius: 20px;
  border: 1px solid #111;
  color: #678;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;
  :hover {
    background-color: ${props =>
      props.label == 'continue' ? '#BADA55' : '#FA113D'};
    color: white;
  }
`;

const button = props => (
  <StyledButton label={props.label} onClick={props.clicked}>
    {props.label}
  </StyledButton>
);

export default button;
