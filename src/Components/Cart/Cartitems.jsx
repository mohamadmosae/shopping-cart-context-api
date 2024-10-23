import React, { useContext} from "react";
import PriductItemInCart from "./PriductItemInCart";
import { AppContext } from "../../AppContext/AppProvider";


const Cartitems = () => {
  const context=useContext(AppContext)
const {addedtocart,addedtocartproduct,totalprice}=context

   return (
    <>
      <div className="w-50 p-2 border shadow rounded mx-auto mt-3 ">
        {addedtocart > 0 ? (
          addedtocartproduct?.map((elem) => {
            return (
<PriductItemInCart key={elem.key} elem={elem}  />
            );
          })
        ) : (
          <div className="total m-2 rounded  p-3 border d-flex justify-content-center align-items-center">
            <p className="m-0 p-0">the shopping cart is empty!</p>
          </div>
        )}
           {addedtocart>0 && (
              <div className="total m-2 rounded  p-3 border d-flex justify-content-center align-items-center">
                <p className="m-0 p-0">total price:{totalprice.toLocaleString()} </p>
              </div>
            )}
      </div>
    </>
  );
};

export default Cartitems;
