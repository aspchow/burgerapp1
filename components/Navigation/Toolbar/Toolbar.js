import React from "react";

import Logo from "../../Logo/Logo";

import "./Toolbar.css";

import NavigationItems from "../NavigationItems/NavigationItems";
const toolbar = props => {
  return (
    <header className="Toolbar">
      <div> Menu</div>
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
