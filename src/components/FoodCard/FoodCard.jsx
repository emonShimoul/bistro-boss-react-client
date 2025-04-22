const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <p className="absolute right-0 top-0 mr-4 mt-4 px-2 bg-slate-900 text-white">
          ${price}
        </p>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
