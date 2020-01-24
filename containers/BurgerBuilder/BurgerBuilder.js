import React, { Component } from "react";
import Aux from " ../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
  salad: 10,
  meat: 40,
  cheese: 20,
  bacon: 25
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 25,
    purchasable: false,
    purchasing: false
  };

  purchasingHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseContinueHandler = () => {
    alert("Item Purchased");
  };
  purchaseCancleHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  updatePurchasable(ingredients) {
    const sum = Object.keys(ingredients)
      .map(i => ingredients[i])
      .reduce((sum, ele) => sum + ele, 0);
    this.setState({
      purchasable: sum > 0
    });
  }
  addIngredientHandler = type => {
    const ingredients = {
      ...this.state.ingredients
    };
    ingredients[type] = this.state.ingredients[type] + 1;
    const totalPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
    this.setState({
      ingredients,
      totalPrice
    });
    this.updatePurchasable(ingredients);
  };

  removeIngredientHandler = type => {
    const ingredients = {
      ...this.state.ingredients
    };
    if (ingredients[type] > 0) {
      ingredients[type] = this.state.ingredients[type] - 1;
      const totalPrice = -(INGREDIENT_PRICES[type] - this.state.totalPrice);
      this.setState({
        ingredients,
        totalPrice
      });
      this.updatePurchasable(ingredients);
    }
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let i in disabledInfo) {
      disabledInfo[i] = disabledInfo[i] <= 0;
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modelClosed={this.purchaseCancleHandler}
        >
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancle={this.purchaseCancleHandler}
            purchaseContinue={this.purchaseContinueHandler}
          />
        </Modal>

        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          showCart={this.purchasingHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
