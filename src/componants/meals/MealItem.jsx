import { useContext } from "react";
import CardContext from "../../store/cart-context";
import Form from './MealItemForm'
import Card from "../card";
export default function Item({food}){
const cartctx=useContext(CardContext)
const addToCartHandler=(amount)=>{
cartctx.addToCart({img:food.thumbnail,id:food.id,name:food.name,price:food.price,amount:amount})
}



    return(
     <Card
        img={food.thumbnail}
        name={food.name}
        description={food.description}
        price={food.price}
      >
        <Form onCart={addToCartHandler} />
      </Card>
 

    )
}