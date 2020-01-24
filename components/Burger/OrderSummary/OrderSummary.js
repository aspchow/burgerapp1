import React from 'react';

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

  <h3>Thanks for Ordering!! :)</h3>
  </Aux>
  );
}

export default orderSummary;