import React from "react";

import Aux from " ../../hoc/Aux";

import "./Layout.css";

const layout = props => (
  <Aux>
    <div>Tool Bar , Side Drawer , Backdrop</div>
    <main className="content">{props.children}</main>
  </Aux>
);
export default layout;
