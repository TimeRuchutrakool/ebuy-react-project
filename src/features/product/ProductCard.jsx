import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
function ProductCard({
  id,
  productImage,
  name,
  price,
  avgRating,
  sellerFirstName,
  sellerLastName,
}) {
  const navigate = useNavigate();
  return (
    <div
      className="w-52 flex flex-col gap-2 cursor-pointer"
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <div className="bg-[#F6F6F6] w-52 h-52 border border-none rounded-md flex justify-center items-center">
        <img
          src={
            productImage?.imageUrl ||
            productImage ||
            `https://upload.wikimedia.org/wikipedia/commons/2/24/Circle-icons-image.svg`
          }
          alt="productImage"
          className="w-40 h-40 object-cover overflow-hidden object-center "
        />
      </div>
      <div className="flex justify-between">
        <p className="font-extralight">{name}</p>
        <p className="font-extralight text-[#1D9E34]">${price}</p>
      </div>
      <p className="font-thin text-[#818B9C]">
        {sellerFirstName} {sellerLastName}
      </p>
      <span className="flex items-center gap-1">
        <AiFillStar className="text-[#FFA439]" />
        <p className="font-light">{avgRating}</p>
      </span>
    </div>
  );
}

export default ProductCard;
