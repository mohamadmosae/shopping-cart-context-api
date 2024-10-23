import React, { useContext } from "react";
import "./Productsitem.css";
import products from "../../db";
import { AppContext } from "../../AppContext/AppProvider";
const Productsitem = ({
  id,
  image,
  name,
  price,
}) => {
  const context=useContext(AppContext)
  const {addedtocart,setaddedtocart,addedtocartproduct,setaddedtocartproduct,totalprice,settotalprice}=context
  const x = addedtocartproduct.some((item) => item.id == id);

  const clickhandler = () => {
    if (x) {
      const updateaddetproduct = [...addedtocartproduct];
      updateaddetproduct.map((item) => {
        if (item.id == id) {
          item.count = item.count + 1;
          item.totalprice = item.id * item.price;
          settotalprice(x=>x+item.price)
        }
        setaddedtocartproduct(updateaddetproduct);
      return 
      });

      // setaddedtocartproduct(update())
    } else {
      setaddedtocart(addedtocart + 1);
      const product = products.find((elem) => {
        return elem.id === id;
      });
      product.count = 1;
      product.totalprice = product.price * product.count;
      setaddedtocartproduct((prev) => [...prev, product]);
      settotalprice(x=>x+product.price)
    }
  };


  return (
    <>
      <div className=" col-sm-5 col-md-3 col-lg-2 m-3 shadow border">
        <div className="img w-100">
          <img className="w-100 img-fluid" src={image} alt="" />
        </div>
        <div className="body p-2 w-100 ">
          <h6 className="m-0">{name}</h6>
          <p className="m-0">{price.toLocaleString()} Tmn </p>
          <button style={{fontSize:"12px"}}
            className="btn btn-sm fw-lighter p-1  m-0 btn-primary"
            onClick={clickhandler}
          >
            add to card
          </button>
        </div>
      </div>
    </>
  );
};

export default Productsitem;