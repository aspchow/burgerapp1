import React, { Component } from "react";

import Layout from "./components/Layout/Layout";

import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";

import BurgerIngredient from './components/Burger/BurgerIngredients/BurgerIngredients'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Testing!!</p>
        </Layout>
        <BurgerBuilder />
        <BurgerIngredient type="meat"/>
      </div>
    );
  }
}

export default App;
