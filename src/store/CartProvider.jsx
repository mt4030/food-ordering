import { useReducer } from "react";
import CardContext from "./cart-context";

const defualtCartstate={
    items:[],
    totalAmount:0
}

///add dispatch
const cartReducer = (state, action) => {
  if (action.identifier === 'ADD') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      // Item already exists → update amount
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // Item is new → just add it
      updatedItems = state.items.concat(action.item);
    }



////new total amount
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    };
  }


////remove dispatch

  if (action.identifier === 'REMOVE') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingItemIndex];

    if (!existingItem) {
      return state;
    }

    const newTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      // remove item completely
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      // decrease amount
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    };
  }

  return state;
};




export default function Cardprovider({ children }){
 const[cartstate,dispatchcartaction ]= useReducer( cartReducer,defualtCartstate)

    const additemtocart=(item) =>{
dispatchcartaction({identifier:'ADD',item:item})
    }
     const removeitemfromcard=(id) =>{
dispatchcartaction({identifier:'REMOVE',id:id})
    }


const cartcontext={
 items:cartstate.items,
    totalAmount: cartstate.totalAmount,
    addToCart: additemtocart,
    removeItem: removeitemfromcard,
   
}
return(
<CardContext.Provider value={cartcontext}>
{children}
</CardContext.Provider>


)
}
   


