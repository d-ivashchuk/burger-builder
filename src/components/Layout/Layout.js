import React from 'react';
import styled from 'styled-components';
import Toolbar from '../Navigation/Toolbar.js';

const Main = styled.section`
  margin-top: 72px;
`;

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <Main>{props.children}</Main>
    </React.Fragment>
  );
};

export default layout;
