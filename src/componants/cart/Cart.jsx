import Model from "./model"
import { useContext } from "react"
import CardContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart =({onHide})=>{
const cartctx = useContext(CardContext);
const isEmpty=cartctx.items.length<=0
const totalAmount=`$${cartctx.totalAmount.toFixed(2)}`
const hasItems=cartctx.items.length>0
const cartitemremovehandeler=id=>{
     cartctx.removeItem(id);
}
const cartitemaddhandeler=item=>{
     cartctx.addToCart({ ...item, amount: 1 });
}
const cardItem=(
<ul className="  flex flex-col gap-3 ">
    {cartctx.items.map((item)=>(
       <CartItem key={item.id}
       img={item.img}
        name={item.name} 
       amount={item.amount}
        price={item.price} 
       onAdd={cartitemaddhandeler.bind(null ,item)} 
       onRemove={cartitemremovehandeler.bind(null ,item.id)} />
        ))}
</ul>
)

    return(
        <>
        <Model >
          <button className="" onClick={onHide}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6.5 text-amber-50 hover:text-blue-950 ">
  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
</svg>
</button>
  {cardItem}
          
        <div className="text-amber-50  md:mb-5 md:mt-2 mt-6  flex justify-between  md:text-2xl text-[18px]">
                    {isEmpty?"Your D&D Cart is empty ":<div><span>Total Amount: </span><span>{totalAmount}</span></div>}

        </div>
        <div className="flex justify-end  ">
     
            {hasItems&& <button className=" bg-blue-900 hover:bg-blue-800 hover:scale-105 transition cursor-pointer text-white rounded-2xl py-2 px-5 ">order</button>}
           
            </div>  
        </Model>
       
        </>
    )
}
export default Cart