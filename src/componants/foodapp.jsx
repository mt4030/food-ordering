import Hero from "./layout/MealsSummary-hero";
import Cart from './cart/Cart'
import Navbar from "./layout/Header";
import Food from "./meals/AvailableMeals";
import Cardprovider from '../store/CartProvider'
import { useState } from "react";
import Footer from "./layout/footer";


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
    <Food />
    </Cardprovider>
    <Footer/>
    </>
)


}