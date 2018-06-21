import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

body{
  font-family: 'Open Sans', sans-serif;

}
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
