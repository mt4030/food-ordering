import CardContext from "../../store/cart-context"
import { useContext,useState,useEffect } from "react"

export default function Headbtn({onClickShow}){
const cartctx=useContext(CardContext)
const numberOfCartItems= (cartctx.items ?? []).reduce((cur,item)=>{
    return cur+item.amount
},0)



  const [isBumping, setIsBumping] = useState(false)


  useEffect(() => {
    if (numberOfCartItems === 0) return
    setIsBumping(true)
    const timer = setTimeout(() => setIsBumping(false), 300) // match animation duration
    return () => clearTimeout(timer)
  }, [numberOfCartItems])

  const btnClasses = `bg-blue-800 text-amber-50 mr-5 h-10 w-20 sm:w-50 my-4 p-2 flex rounded-xl justify-center ${
    isBumping ? "bump" : ""
  }`




    return(
        <>
        <button onClick={onClickShow} className={btnClasses}>

       
        <span className="inline-block  mr-3"> 
           
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
</svg>

        </span>
            <span className=" mr-3 hidden md:inline-block">your cart:</span>
            <span className="inline-block bg-blue-500 rounded-xl w-6"> {numberOfCartItems} </span> 
            
            </button>
        </>
    )
}