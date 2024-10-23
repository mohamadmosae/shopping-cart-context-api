import { createContext, useState } from "react";
export const AppContext = createContext();
const Appprovider = ({ children }) => {
  const [addedtocart, setaddedtocart] = useState(0);
  const [addedtocartproduct, setaddedtocartproduct] = useState([]);
  const [totalprice, settotalprice] = useState(0);
  const value = {
    totalprice,
    settotalprice,
    addedtocartproduct,
    setaddedtocartproduct,
    addedtocart,
    setaddedtocart,
  };
  return( <AppContext.Provider value={value}>{children}</AppContext.Provider>);
};
export default Appprovider;
