

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
const trash=<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4 ">
  <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd" />
</svg>

  return (
    <li className="border-b border-blue-500/50 py-5 scroll-auto flex justify-between  ">
      <div>
        <h2 className="text-2xl text-blue-900  ">{props.name}</h2>
        <div >
          <span className="text-blue-950 font-bold mt-3 inline-block">{price}</span>
          <span className="border w-8 h-8 bg-amber-50 text-blue-950 ml-5 px-1 inline-block" >x {props.amount}</span>
        </div>
      </div>
      <div className="flex my-auto">
        {props.amount===1?<button className=" rounded-4xl w-8 h-8 bg-blue-900 hover:bg-blue-800 text-amber-50 mr-4 hover:cursor-pointer" onClick={props.onRemove}><div className="m-2">{trash}</div></button>:<button className=" rounded-4xl w-8 h-8 bg-blue-900 hover:bg-blue-800 text-amber-50 mr-4 hover:cursor-pointer" onClick={props.onRemove}>−</button>}
        
        <button  className=" rounded-4xl w-8 h-8 bg-blue-900 hover:bg-blue-800 text-amber-50 mr-4  hover:cursor-pointer "onClick={props.onAdd}>+</button>
      
      </div>
    </li>
  );
};

export default CartItem;
