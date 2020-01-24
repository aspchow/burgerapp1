import React from "react";

import './Button.css';
const button = props => {
  const classes = "Button " + props.btnType ; 
  console.log(classes);
  return <button onClick={props.clicked} className= {classes} > {props.children} </button>;
};

export default button;
