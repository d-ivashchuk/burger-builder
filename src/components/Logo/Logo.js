import React from 'react';
import burgerLogo from '../../assets/burger-logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
  background-color: white;
  padding: 6px;
  height: 80%;
  border-radius: 5px;
  box-sizing: border-box;
  > img {
    height: 100%;
  }
`;

const logo = props => (
  <LogoContainer>
    <img src={burgerLogo} alt="Burger" />
  </LogoContainer>
);

export default logo;
