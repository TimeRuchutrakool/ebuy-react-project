import { AiFillStar } from "react-icons/ai";
function ProductCard({ productImage, name, price, avgRating }) {
  return (
    <div className="w-52 flex flex-col gap-2 cursor-pointer">
      <div className="bg-[#F6F6F6] w-52 h-52 border border-none rounded-md flex justify-center items-center">
        <img
          src={productImage.imageUrl}
          alt=""
          className="w-40 h-40 object-cover overflow-hidden object-center"
        />
      </div>
      <div className="flex justify-between">
        <p className="font-extralight">{name}</p>
        <p className="font-extralight text-[#1D9E34]">${price}</p>
      </div>
      <p className="font-thin text-[#818B9C]">North Purwokerto</p>
      <span className="flex items-center gap-1">
        <AiFillStar className="text-[#FFA439]" />
        <p className="font-light">{avgRating}</p>
      </span>
    </div>
  );
}

export default ProductCard;
