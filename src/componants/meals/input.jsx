import { useContext } from "react";
import React from "react";

const Input=React.forwardRef((props,ref)=>{
    ///becuz we couldnt use ref on form cuz is custom input we use it here
const {input,label}=props
    return(
        <>
        <div className="mb-5">
               <label htmlFor={input.id} className="font-bold mr-2 "> {label}</label> 
                <input ref={ref} className="bg-blue-100 text-gray-900 w-10 rounded-2xl  pl-4"  id={input.id} defaultValue={input.default} {...input}/>

        </div>
    
        </>
    )
})
export default Input