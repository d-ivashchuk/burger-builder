import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger.js';
import BuildControls from '../../components/Burger/BuildControls/BuildControls.js';

const INGRIDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBulider extends React.Component {
  state = {
    ingridients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    totalIngredients: null
  };

  addIngiridentHandler = type => {
    const updatedIngridients = { ...this.state.ingridients };
    const prevVal = this.state.ingridients[type];
    this.setState({
      ingridients: { ...this.state.ingridients, [type]: prevVal + 1 },
      totalPrice: this.state.totalPrice + INGRIDIENT_PRICES[type],
      totalIngredients: this.state.totalIngredients + 1,
      purchaseable: true
    });
  };
  removeIngiridentHandler = type => {
    const updatedIngridients = { ...this.state.ingridients };
    const prevVal = this.state.ingridients[type];
    if (this.state.ingridients[type] !== 0) {
      this.setState({
        ingridients: { ...this.state.ingridients, [type]: prevVal - 1 },
        totalPrice: this.state.totalPrice - INGRIDIENT_PRICES[type],
        totalIngredients: this.state.totalIngredients - 1
      });
      if (this.state.totalIngredients === 1) {
        this.setState({ purchaseable: false });
      }
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingridients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <React.Fragment>
        <Burger ingridients={this.state.ingridients} />
        <BuildControls
          removeIngridient={this.removeIngiridentHandler}
          addIngridient={this.addIngiridentHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBulider;
