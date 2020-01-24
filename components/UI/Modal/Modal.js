import React from "react";


import "./Modal.css";
const modal = props => {
  const classes = props.show ? "Modal show" : "Modal dontShow" 
  return(
    <div className= {classes}>
    { props.children }
 </div>
  );
}

export default modal;
