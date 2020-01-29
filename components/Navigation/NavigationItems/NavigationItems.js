import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import "./NavigationItems.css";
const navigationItems = props => <ul className="NavigationItem"> 

<NavigationItem link="/" active>Burger Builder</NavigationItem>
<NavigationItem link="/">CheckOut</NavigationItem>
</ul>;

export default navigationItems;
