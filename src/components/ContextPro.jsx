import React, { createContext, use, useContext, useReducer } from 'react'
import { sumProduct } from '../module/helper/helper';
import {productquantity} from "../module/helper/helper"

export const CardContext = createContext();
const initialState={
selecteditem: [],
  itemCounter: 0,
  total: 0,
  Cheakout: false,
}
          
const sumItems = (items) => {
  const itemCounter = items.reduce((total, item) => total + item.quantity, 0);
  const total = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return { itemCounter, total };
}

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
   
     if(!state.selecteditem.find((x)=>x?.id===action.payload?.id)){

const newitem=[...state.selecteditem,{...action.payload , quantity:1}]// یه ارایه جدید درسن کن سلکت ایتم قبی داخلش بریز و اکشن پی لود و کوناتیتی رو بهش اضافه کن 
console.log(newitem)
return{
  ...state,
  selecteditem: [...newitem],
  ...sumItems(state.selecteditem)//  جایگزین میکنه در اینیشال استیت با توجه به نام کلید ها خود ریکت میفهمه در کدوم قسمت باید جایگزین کنه 
 };// و حتی در کدوم اتسیت میفهمه باید بریزه خیلی باهوشه ریکت 
     
     
     }
     
    
     
    case "REMOVE_ITEM":
      const filter=state.selecteditem.filter((x)=>x?.id !== action.payload?.id)

      
      return{
        ...state,
        selecteditem:filter,
      ...sumItems(filter)
      }

      case "INC":
      const index=state.selecteditem.findIndex((x)=> x.id===action.payload.id)
state.selecteditem[index].quantity++
      
      return{
        ...state,
        
        ...sumItems(state.selecteditem)
      }

 case "Dec":
      const indexx=state.selecteditem.findIndex((x)=> x.id===action.payload.id)
state.selecteditem[indexx].quantity--
      
      return{
        ...state,
        
        ...sumItems(state.selecteditem)
      }

    }
};



function ContextPro({children}) {
     const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  )
}

const usecard=()=>{

const context=useContext(CardContext)
return context

}

export default ContextPro
export{usecard}












          // if (!state.selecteditem.find((item) => item.id === action.payload.id)) {
       // const newItems = [...state.selecteditem, { ...action.payload, quantity: 1 }];
       // return {
        // ...state,
        //  selecteditem: newItems,
        //  ...sumItems(newItems)



