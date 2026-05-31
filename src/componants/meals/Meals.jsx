import { foods } from '../../util/data'
import Item from './MealItem'
export default function Items(){

    return(
        <>
 <section className=' mb-3.5'>
        
            <ul className='grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 gap-7 justify-center' >

{foods.map((item)=>(
   <Item key={item.id} food={item} id={item.id}  />
 ))}   
      
         
    

       </ul>
       </section>
 
 

        </>
    )
}