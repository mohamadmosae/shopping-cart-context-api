import React from "react";
import Productsitem from "./Productsitem";
import products from "../../db";

const ProductCountanet = () => {
  return (
    <>
      <div className=" container mt-5   ">
        <div className="d-flex justify-content-center align-items-center mx-auto w-100 flex-wrap ">
          {products?.map((products) => {
            return (
              <Productsitem
                key={products.id}
                id={products.id}
                image={products.image}
                price={products.price}
                name={products.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductCountanet;
