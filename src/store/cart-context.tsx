import React from "react";

const CardContext = React.createContext({
  cart: [],
  totalAmount: 0,
  addToCart: (item) => {},
  removeItem: (id:number) => {},
   showCart: () => {},
  hideCart: () => {}
});

export default CardContext;