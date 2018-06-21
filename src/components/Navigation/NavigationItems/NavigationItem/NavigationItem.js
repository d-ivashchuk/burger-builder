import React from 'react';
import styled from 'styled-components';

const NavigationItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
`;
const StyledAnchor = styled.a`
  color: white;
  text-decoration: none;
  height: 100%;
  padding: 16px 10px;
  box-sizing: border-box;
  display: block;
  border-bottom: ${props => (props.active ? '4px solid #10aded' : null)};
  opacity: ${props => (props.active ? '0.8' : null)};
  :hover {
    border-bottom: 4px solid #10aded;
    opacity: 0.8;
  }
`;

const navigationItem = props => (
  <NavigationItem>
    <StyledAnchor href={props.link} active={props.active}>
      {props.children}
    </StyledAnchor>
  </NavigationItem>
);

export default navigationItem;
