import React from "react";

import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";

import "./Burger.css";

const burger = props => {
  let ingredients = Object.keys(props.ingredients).map(igKey =>{
    let a = [];
    for(var i =1 ; i<= props.ingredients[igKey] ; i++){
      a.push("hello");
    }
    return a.map((_ ,index) => {
      
      return  <BurgerIngredient key={igKey + index} type= {igKey}/>
    });
  }).reduce( (arr , ele)=>{
   return arr.concat(ele) 
  },[]);
  console.log(ingredients);
  if(ingredients.length == 0){
    ingredients = <div> Please Start Adding Incredients</div>
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
