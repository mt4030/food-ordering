



import Item from './MealItem'
export default function Items({foods}){

    return(
        <>
 <section className=' mb-3.5'>
        
            <ul >
{foods.map((m)=>(
   <Item key={m.id} foods={m} id={m.id}  />
 ))}   
      
         
    

       </ul>
       </section>
 
 

        </>
    )
}