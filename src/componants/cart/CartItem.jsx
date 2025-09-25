

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

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
        <button className=" rounded-4xl w-8 h-8 bg-blue-700 hover:bg-blue-800 text-amber-50 mr-4 hover:cursor-pointer" onClick={props.onRemove}>−</button>
        <button  className=" rounded-4xl w-8 h-8 bg-blue-700 text-amber-50 mr-4 hover:bg-blue-800 hover:cursor-pointer "onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
