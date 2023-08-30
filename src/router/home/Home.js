import React from "react";
import Banner from "../../components/banner/Banner";
import Products from "../../components/products/Products";
import Category from "../../components/Category/Category";
import { ProductsData } from "../../static";

function Home() {
  return (
    <div>
      <Banner />
      <Category />
      <Products ProductsData={ProductsData} />
    </div>
  );
}

export default Home;
