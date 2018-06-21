import React from 'react';
import Button from '../../UI/Button/Button.js';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const orderSummary = props => {
  const ingridientSummary = Object.keys(props.ingridients).map(igKey => {
    return (
      <div key={igKey}>
        <span>{igKey}</span>: {props.ingridients[igKey]}
      </div>
    );
  });
  return (
    <React.Fragment>
      <h3>Your order</h3>
      <p>A delicious burger with following ingridients</p>
      {ingridientSummary}
      <p>
        Total price : <strong>{props.price.toFixed(2)} $$$</strong>
      </p>
      <p>Continue to Checkout?</p>
      <ButtonContainer>
        <Button label={'cancel'} clicked={props.closeModal} />
        <Button label={'continue'} clicked={props.continuePurchase} />
      </ButtonContainer>
    </React.Fragment>
  );
};

export default orderSummary;
