import Hero from "./layout/MealsSummary-hero";
import Cart from './cart/Cart'
import Navbar from "./layout/Header";
import Food from "./meals/AvailableMeals";
import Cardprovider from '../store/CartProvider'
import { useState } from "react";
import Footer from "./layout/footer";

const foods = [
  { id: 1, name: "Pizza", description: "Cheesy hot slice", price: 12.99 },
  { id: 2, name: "Burger", description: "Juicy beef patty", price: 9.49 },
  { id: 3, name: "Sushi", description: "Fresh salmon roll", price: 14.99 },
  { id: 4, name: "Pasta", description: "Creamy white sauce", price: 11.25 }
];

export default function Foodapp(){

const[overlay,setoverlay]=useState(false)
 const Showcarthandel=()=>{
setoverlay(true)
}
const hidecarthandel=()=>{
setoverlay(false)
 }

return(

    <>
    <Cardprovider>
     {overlay&&<Cart onHide={hidecarthandel} />}
    
    <Navbar onShow={Showcarthandel} />
    <Hero/>
    <Food foods={foods}/>
    </Cardprovider>
    <Footer/>
    </>
)


}