import React from 'react';
import BuildControl from './BuildControl/BuildControl.js';
import styled from 'styled-components';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = styled.div`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

const Price = styled.div`
  font-weight: bold;
  padding: 10px;
  margin-bottom: 20px;
  color: white;
  border: solid 1px white;
  border-radius: 10px;
`;

const OrderButton = styled.button`
  background: none;
  outline: none;
  width: 150px;
  border-radius: 15px;
  cursor: pointer;
  border: 1px solid white;
  color: white;
  font-family: inherit;
  font-size: 1.2em;
  padding: 10px;
  margin-top: 20px;

  :hover {
    background-color: white;
    border: 1px solid #966909;
    color: #966909;
  }
  :disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }
  :not(:disabled) {
    animation: enable 0.3s linear;
  }

  @keyframes enable {
    0% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const buildControls = props => {
  return (
    <BuildControls>
      <Price>Current price : {props.price.toFixed(2)}</Price>
      {controls.map(ctrl => (
        <BuildControl
          removeIngridient={props.removeIngridient}
          addIngridient={props.addIngridient}
          key={ctrl.label}
          type={ctrl.type}
          label={ctrl.label}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <OrderButton disabled={!props.purchaseable}>Order</OrderButton>
    </BuildControls>
  );
};

export default buildControls;
