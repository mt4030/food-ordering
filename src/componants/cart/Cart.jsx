import Model from "./model"
import { useContext } from "react"
import CardContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart =({onHide})=>{

  const cartctx = useContext(CardContext);
const totalAmount=`$${cartctx.totalAmount.toFixed(2)}`
const hasItems=cartctx.items.length>0
const cartitemremovehandeler=id=>{
     cartctx.removeItem(id);
}
const cartitemaddhandeler=item=>{
     cartctx.addToCart({ ...item, amount: 1 });
}
const cardItem=(
<ul className="bg-blue-300  ">
    {cartctx.items.map((item)=>(
       <CartItem key={item.id}
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
        <Model>
            {cardItem}
        <div className="text-amber-50 md:mb-5 md:mt-2   flex justify-between  md:text-2xl text-[18px]">
<span>total amount:</span>
<span>{totalAmount}</span>
        </div>
        <div className="flex justify-end ">
            <button className="border  rounded-2xl py-2 px-5 mr-2 bg-gray-100 text-gray-900" onClick={onHide}>close</button>
            {hasItems&& <button className=" bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-2 px-5 ">oreder</button>}
           
            </div>  
        </Model>
       
        </>
    )
}
export default Cart