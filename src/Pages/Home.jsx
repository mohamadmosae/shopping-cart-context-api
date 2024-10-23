import React from "react";
import ProductCountanet from "../Components/Product/ProductCountanet";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mb-5">
        <ProductCountanet />
      </div>
      <Footer />
    </>
  );
};

export default Home;
