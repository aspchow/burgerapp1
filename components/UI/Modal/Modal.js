import React from "react";

import Aux from "../../../hoc/Aux";

import Backdrop from '../Backdrop/Backdrop'
import "./Modal.css";
const modal = props => {
  const classes = props.show ? "Modal show" : "Modal dontShow";
  return (
    <Aux>
    <Backdrop show = {  props.show } clicked = {props.modelClosed}/>
      <div className={classes}>{props.children}</div>

    </Aux>
  );
};

export default modal;
