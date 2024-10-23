import React, { useContext} from "react";
import { BsBasket } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AppContext } from "../../AppContext/AppProvider";
const Navbar = () => {
const context=useContext(AppContext)
const {addedtocart}=context
  return (
    <div className="p-2 d-flex justify-content-center align-items-center bg-info">
      <Link to={"/"} className="btn mx-3 ">
        home
      </Link>
      <Link
        to={"/cart"}
        id="basket"
        className="btn btn-primary btn-sm position-relative"
      >
        <BsBasket />
        {addedtocart ? (
          <span className="position-absolute" id="bag">
            {addedtocart}
          </span>
        ) : null}
      </Link>
    </div>
  );
};

export default Navbar;
