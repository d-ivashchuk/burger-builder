import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BurgerIngridients from './BurgerIngridients/BurgerIngridients';

const Burger = styled.div`
  width: 400px;
  margin: auto;
  height: 300px;
  overflow: visible;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

const burger = props => {
  let transformedIngridients = Object.keys(props.ingridients)
    .map(igKey => {
      return [...Array(props.ingridients[igKey])].map((_, i) => {
        return <BurgerIngridients key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngridients.length === 0) {
    transformedIngridients = <p>Please start adding ingridients!</p>;
  }
  return (
    <Burger>
      <BurgerIngridients type="bread-top" />
      {transformedIngridients}
      <BurgerIngridients type="bread-bottom" />
    </Burger>
  );
};

export default burger;
