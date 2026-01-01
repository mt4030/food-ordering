import Input from './input'
import { useState ,createContext, useRef} from "react";
export const amountContext=createContext(null)



export default function Form({onCart}){
    const[valid,setvalid]=useState(true)
const amountInputRef=useRef(null)

const handelsubmit=(e)=>{
   e.preventDefault()
const enteredAmount = amountInputRef.current?.value;
if (enteredAmount.trim().length === 0) {  
  setvalid(false);
  return;
}
const enteredAmountNum = +enteredAmount;

if (enteredAmountNum < 1 || enteredAmountNum > 5) {
  setvalid(false);
  return;
}
onCart(enteredAmountNum);
  };

    return(
        <>

<form onSubmit={ handelsubmit} >

    <amountContext.Provider value={setvalid}>
    <Input  
    ref={amountInputRef}
    
    label='Amount' input={{
        type:'number' 
        , id:'amount'
        ,min:'1'
        ,max:5
        ,step:1,
        default:1 }} />
   </amountContext.Provider>
<button className=" rounded-2xl w-full h-8  font-bold bg-blue-600 hover:bg-blue-700 text-white">+ add</button>
{!valid&&<p>please enter a valid amount (1-5)</p>}
</form>
</>
    )
}