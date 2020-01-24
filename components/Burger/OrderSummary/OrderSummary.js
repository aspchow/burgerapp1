import React from 'react';

import Button from '../../UI/Button/Button'

import Aux from '../../../hoc/Aux'

import './OrderSummary.css';
const orderSummary = props => {
  const ingredients = props.ingredients;
  const ingredientSummary = Object.keys(ingredients).map( key
  => <li key={key}> <span className = "capitalize">
   {key } </span> : {ingredients[key]} </li>)
  return (
    <Aux>
  <h3>Your Order Summary : </h3>
  <ul>
  {ingredientSummary}
  </ul>

  <h3>please confirm your order :)</h3>

  <Button btnType= "Success" clicked = { props.purchaseContinue}> Continue </Button>
  <Button btnType= "Danger" clicked = { props.purchaseCancle}> Cancle </Button>
  </Aux>
  );
}

export default orderSummary;