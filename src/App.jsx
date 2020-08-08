import React from "react";
import PrimarySearchNavBar from "./components/PrimarySearchNavBar";
import PrimaryHeader from "./components/PrimaryHeader";
import FeaturedProducts from "./components/FeaturedProducts";
import { Grid, Divider } from "@material-ui/core";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import AboutShop from "./components/AboutShop";
import ProductsSection from "./components/ProductsSection";

function App() {
  return (
    <>
      <PrimarySearchNavBar />
      <PrimaryHeader />

      <Divider />
      <FeaturedProducts />
      <Divider />
      <Subscribe />
      <Divider />
      <ProductsSection />
      <Divider />
      <AboutShop />
      <Footer />
    </>
  );
}

export default App;
