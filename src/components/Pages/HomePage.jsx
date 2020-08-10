import React from "react";
import PrimarySearchNavBar from "../PrimarySearchNavBar";
import PrimaryHeader from "../PrimaryHeader";
import FeaturedProducts from "../FeaturedProducts";
import { Grid, Divider } from "@material-ui/core";
import Subscribe from "../Subscribe";
import Footer from "../Footer";
import AboutShop from "../AboutShop";
import ProductsSection from "../ProductsSection";

function HomePage({history}) {

  return (
    <>
      <PrimarySearchNavBar history={history}/>
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

export default HomePage;