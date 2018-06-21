import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BreadBottom = styled.div`
  height: 13%;
  width: 80%;
  background: #f08e4a
  border-radius: 0 0 30px 30px;

  margin: 2% auto;
`;
const BreadTop = styled.div`
  height: 20%;
  width: 80%;
  background: linear-gradient(#bc581e, #e27b36);
  border-radius: 50% 50% 0 0;

  margin: 2% auto;
  position: relative;
`;

const Meat = styled.div`
  width: 80%;
  height: 8%;
  background: #7f3608
  margin: 2% auto;
  border-radius: 15px;
`;
const Cheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  background: #f4d004
  border-radius: 20px;
`;
const Salad = styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  background: #228c1d
  border-radius: 20px;
`;
const Bacon = styled.div`
  width: 80%;
  height: 3%;
  background: linear-gradient(#bf3813, #c45e38);
  margin: 2% auto;
`;

class BurgerIngridients extends React.Component {
  render() {
    let ingridient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingridient = <BreadBottom />;
        break;
      case 'bread-top':
        ingridient = <BreadTop />;
        break;
      case 'meat':
        ingridient = <Meat />;
        break;
      case 'cheese':
        ingridient = <Cheese />;
        break;
      case 'bacon':
        ingridient = <Bacon />;
        break;
      case 'salad':
        ingridient = <Salad />;
        break;
      default:
        ingridient = null;
    }

    return ingridient;
  }
}

BurgerIngridients.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngridients;
