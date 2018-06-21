import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem.js';

const NavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 100%;
`;

const navigationItems = () => (
  <NavigationItems>
    <NavigationItem link={'/'} active>
      BurgerBuilder
    </NavigationItem>
    <NavigationItem link={'/'}>Checkout page</NavigationItem>
  </NavigationItems>
);

export default navigationItems;
