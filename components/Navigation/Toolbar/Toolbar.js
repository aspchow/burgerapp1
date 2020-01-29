import React from "react";

import Logo from '../../Logo/Logo';

import "./Toolbar.css";
const toolbar = props => {
  return (
    <header className= "Toolbar">
      <div> Menu</div>
      <Logo />
      <nav>....</nav>
    </header>
  );
};

export default toolbar;
