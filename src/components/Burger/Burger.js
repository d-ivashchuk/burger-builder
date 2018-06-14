import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BurgerIngridients from './BurgerIngridients/BurgerIngridients'

const Burger = styled.div`
width:400px;
margin:auto;
height:250px;
overflow:scroll;
text-align:center;
font-weight:bold;
font-size:1.2rem;

`

const burger = (props) => {
  return (
    <Burger>
      <BurgerIngridients type='bread-top'/>
      <BurgerIngridients type='salad'/>
      <BurgerIngridients type='meat'/>
      <BurgerIngridients type='cheese'/>
      <BurgerIngridients type='bacon'/>
      <BurgerIngridients type='cheese'/>
      <BurgerIngridients type='salad'/>
      <BurgerIngridients type='bread-bottom'/>
    </Burger>
  )
}

export default burger
