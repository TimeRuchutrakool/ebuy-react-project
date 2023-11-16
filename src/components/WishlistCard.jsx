import { AiFillStar } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import axios from "../config/axios";
import { useNavigate } from "react-router-dom";

export default function WishlistCard({
  seller,
  imageUrl,
  name,
  price,
  product,
  isWish,
  setIsWish,
}) {
  const navigate = useNavigate();

  const toggleWish = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await axios.post(`/wish/toggleWish/${product.id}`);
      setIsWish(!isWish);
    } catch (err) {
      console.log(err);
    }
  };

  const clickOnProduct = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="w-[208px] flex flex-col gap-2 ">
      <div
        className="bg-[#F6F6F6] w-52 h-52 border  rounded-md flex justify-center items-center relative cursor-pointer"
        onClick={clickOnProduct}
      >
        <div className="w-8 rounded-full h-8 bg-white flex items-center justify-center absolute top-3 right-3">
          <button className="text-2xl" onClick={toggleWish}>
            <MdFavorite className="text-red-500" />
          </button>
        </div>
        <img
          src={imageUrl}
          alt="productImage"
          className="w-40 h-40 object-cover overflow-hidden object-center"
        />
      </div>
      <div className="flex  gap-2 justify-between">
        <p className="font-extralight">{name}</p>
        <p className="font-extralight  text-[#1D9E34]">฿590</p>
      </div>
      <p className="font-thin text-[#818B9C]">{seller}</p>
      <span className="flex items-center gap-1">
        <AiFillStar className="text-[#FFA439]" />
        <p className="font-light">{price}</p>
      </span>
    </div>
  );
}
