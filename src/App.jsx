import React from "react";
import { Switch, Route } from "react-router-dom"
import ShopPage from "./components/Pages/ShopPage";
import HomePage from "./components/Pages/HomePage";
import ProductPage from './components/Pages/ProductPage'
import CartPage from './components/Pages/CartPage'
const App = ()=>{

  return ( 
    <Switch>
     
      <Route exact path="/" render={(props) => <HomePage {...props}/>} />
      <Route exact path="/shop" render={(props) => <ShopPage {...props}/>} />
      <Route exact path="/product" render={(props) => <ProductPage {...props}/>} />
      <Route exact path="/cart" render={(props) => <CartPage {...props}/>} />
      </Switch>
  );
}

export default App;
