import React from "react";
import { Switch, Route } from "react-router-dom"
import ShopPage from "./components/Pages/ShopPage";
import HomePage from "./components/Pages/HomePage";
const App = ()=>{

  return ( 
    <Switch>
     
      <Route exact path="/" render={(props) => <HomePage {...props}/>} />
      <Route exact path="/shop" render={(props) => <ShopPage {...props}/>} />
      </Switch>
  );
}

export default App;
