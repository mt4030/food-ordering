import { useEffect } from "react";
import ReactDOM from "react-dom";

 function Backdrop(){



return <div className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.5)] z-100">

</div>
}

 function Modeloverlay(props){



return <div className="fixed max-h-[60vh]  md:max-h-[80vh] md:top-[10%] md:left-[25%]  top-[25%] left-[10%] w-[80%] md:w-[50%] h-[50%] md:h-auto bg-blue-300 p-7 mb-8 rounded-2xl z-101 overflow-y-auto ">

    <div>
        {props.children}
    </div>

</div>
}
const portalelement=document.getElementById('overlay')

export default function Model(props){
   return(
   <>
{ReactDOM.createPortal( <Backdrop/>,portalelement )}
{ReactDOM.createPortal( <Modeloverlay>{props.children} </Modeloverlay>,portalelement )}
   
   
   </>
   
  
   ) 
}