import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];

const buildControl = props => (
  <div className="BuildControls">
    <p> Current Price is <strong> {props.price} </strong></p>
    {controls.map(i => {
      return (
        <BuildControl
          key={i.label}
          label={i.label}
          addIngredient={() => props.addIngredient(i.type)}
          removeIngredient={() => props.removeIngredient(i.type)}
          disabled={props.disabledInfo[i.type]}
        />
      );
    })}
    <button disabled={!props.purchasable}  className="OrderButton"
    onClick= {props.showCart}>Order Now</button>
  </div>
);

export default buildControl;
