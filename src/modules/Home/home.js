import React from "react";
import Hero from "../../components/Hero/hero";
import ProductsMostViewed from "../../components/ProductsMostViewed/productsmostviewed";
import Testemonials from "../../components/Testemonials/testemonials";


const Home = () => {
  return (
    <div>
      <Hero />
      <ProductsMostViewed/>
      <Testemonials />
    </div>
  );
};

export default Home;
