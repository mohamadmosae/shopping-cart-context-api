import React, { useContext, useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { AppContext } from "../../AppContext/AppProvider";


const PriductItemInCart = ({elem}) => {
const context=useContext(AppContext)
const {addedtocartproduct,setaddedtocart,setaddedtocartproduct,settotalprice,totalprice}=context
  const [counter, setcounter] = useState(elem.count);
  const inchandler = () => {
    elem.count = elem.count + 1;
  elem.totalprice=elem.count*elem.price
    setcounter(elem.count);
    settotalprice(x=>x+elem.price)
  };
  const dechandler = () => {
    if (counter === 1) {
      const x = addedtocartproduct.filter((item) => item.id !== elem.id);
      setaddedtocartproduct(x);
      setaddedtocart(x=>x-1)
    settotalprice(x=>x-elem.price)
if(addedtocartproduct.length===0){
  settotalprice(0)
 return console.log("reset");
}
    } else {
      elem.count = elem.count - 1;
      elem.totalprice=elem.count*elem.price
      setcounter(elem.count);
      settotalprice(x=>x-elem.price)
    }    
  };

  return (
    <div className="cart-items">
      <div className="d-flex border px-2 col2 m-2 rounded justify-content-between">
        <div className="img col-2">
          <img src={elem.image} className="img-fluid w-100" alt="" />
        </div>
        <div className="count d-flex justify-content-center align-items-center ">
          <button
            onClick={inchandler}
            className="btn p-0 text-center btn-outline-dark m-2 btn-sm "
            style={{
              lineHeight: "30px",
              width: "30px",
              height: "30px",
            }}
          >
            +
          </button>
          <span>{counter}</span>
          <button
            onClick={dechandler}
            className="btn p-0 text-center btn-outline-dark m-2 btn-sm "
            style={{
              lineHeight: "30px",
              width: "30px",
              height: "30px",
            }}
          >
            {elem.count == 1 ? <FaRegTrashCan /> : "-"}
          </button>
        </div>
        <div className="txt d-flex flex-column text-center justify-content-center">
          <p className="m-1 " style={{ fontSize: "12px" }}>
            {elem.name}
          </p>
          <p className="m-1 " style={{ fontSize: "13px" }}>
            {elem.totalprice.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  
  );
};

export default PriductItemInCart;
