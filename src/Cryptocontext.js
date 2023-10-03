// import React, { useContext, useState ,useEffect} from 'react';
// import { createContext } from "react";

// const Crypto = createContext();
// const Cryptocontext = ({Children}) => {
//     const[currency,setCurrency]=useState("INR")
//     const [symbol,setSymbol]=useState("₹")

//     useEffect(() => {
//         if (currency === "INR") setSymbol("₹");
//         else if (currency === "USD") setSymbol("$");
//       }, [currency]);
//   return (
//   <Crypto.Provider value={{currency,symbol,setCurrency}}>
//       {Children}
//   </Crypto.Provider>
//   )
// }

// export default Cryptocontext;

// export const Cryptostate=()=>{
//    return useContext(Crypto)
// }

import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const Cryptostate = () => {
  return useContext(Crypto);
};