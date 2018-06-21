import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo.js';
import NavigationItems from './NavigationItems/NavigationItems.js';

const Toolbar = styled.div`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #a27157;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
  > nav {
    height: 100%;
  }
`;

const toolbar = () => (
  <Toolbar>
    <div>Menu</div>
    <Logo />
    <nav>
      <NavigationItems />
    </nav>
  </Toolbar>
);

export default toolbar;
