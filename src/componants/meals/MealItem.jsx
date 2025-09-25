
import { useContext } from "react";
import CardContext from "../../store/cart-context";
import Form from './MealItemForm'

export default function Item({foods}){
const cartctx=useContext(CardContext)
const addToCartHANDELER=(amount)=>{
cartctx.addToCart({id:foods.id,name:foods.name,price:foods.price,amount:amount})
}
const price =`${foods.price}`


    return(
<li className='border-b pb-5 pt-3 border-amber-400/50 flex justify-between items-center'>
  
    <div className='mb-6 px-9 ' >
    <h2 className='text-2xl  mb-5'>{foods.name}</h2>
    <p className='mb-3'>{foods.description}</p>
    <p className='text-amber-800  font-bold'>${price}</p>  
    </div>  
    <div>
        <Form foods={foods} onCart={addToCartHANDELER}/>
    </div>
 
</li>
    )
}