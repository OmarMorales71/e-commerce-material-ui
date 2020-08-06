import React from "react";
import PrimarySearchNavBar from "./components/PrimarySearchNavBar";
import PrimaryHeader from "./components/PrimaryHeader";
import FeaturedProducts from "./components/FeaturedProducts";
import { Grid } from "@material-ui/core";

function App() {
  return (

    <>
        <PrimarySearchNavBar />
      
          <PrimaryHeader />
<br />
<br />
          <FeaturedProducts />
      </>
    
  );
}

export default App;
