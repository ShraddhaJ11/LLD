const ProductCard = ({ id,title, price, description, thumbnail, discountPercentage }) => {
  return (
    <div className="m-4 p-4 border border-solid border-black">
      <img className="h-48 object-contain" src={thumbnail} alt={title} />
      <h1 className="text-bold">{id} - {title}</h1>
      <p className="text-sm">
        Rs.{price} - Discount of {discountPercentage}%
      </p>
      <h3 className="w-72">{description}</h3>
    </div>
  );
};

export default ProductCard;