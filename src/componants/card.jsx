const Card = ({ img, name, description, price, children }) => {
  return (
    <div className=" w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden">
      <img src={img} alt={name} className="h-48 w-full object-cover" />

      <div className="p-5 ">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">{description}</p>

        <div className="flex justify-between items-center">
          <span className="font-bold text-green-600">${price}</span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
