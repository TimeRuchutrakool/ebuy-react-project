import { AiOutlineHeart, AiFillStar } from "react-icons/ai";

export default function WishlistCard() {
  return (
    <div className="w-fit flex flex-col gap-2">
      <div className="bg-[#F6F6F6] w-52 h-52 border  rounded-md flex justify-center items-center relative">
        <div className="w-8 rounded-full h-8 bg-white flex items-center justify-center absolute top-3 right-3">
          <AiOutlineHeart className="" />
        </div>
        <img
          src="https://i.pinimg.com/564x/c9/89/3f/c9893fcccfd321ecfdb07b9037e38d62.jpg"
          alt="productImage"
          className="w-40 h-40 object-cover overflow-hidden object-center"
        />
      </div>
      <div className="flex justify-between">
        <p className="font-extralight">เสื้อยืดมือสอง</p>
        <p className="font-extralight text-[#1D9E34]">฿590</p>
      </div>
      <p className="font-thin text-[#818B9C]">นันทพล นายาต</p>
      <span className="flex items-center gap-1">
        <AiFillStar className="text-[#FFA439]" />
        <p className="font-light">test</p>
      </span>
    </div>
  );
}
