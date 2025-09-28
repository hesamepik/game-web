import React, { createContext, useContext, useEffect, useState } from 'react'
import {card} from "../card.js"
export const CardContext = createContext([]);

function Context({children}) {
  const [product, setProduct] = useState([]);
 useEffect(() => {
    setProduct(card);
  }, []);
   return (
    <CardContext.Provider value={product}>
      {children}
    </CardContext.Provider>
  );
}

const  useProductdetail=(id)=>{
const products=useContext(CardContext)
const res=products.find((pro)=>pro.id===id)
console.log(id)
return res

}
export default Context
export { useProductdetail};