import { AiFillStar } from "react-icons/ai";
function ProductCard() {
  return (
    <div className="w-52 flex flex-col gap-2 cursor-pointer">
      <div className="bg-[#F6F6F6] w-52 h-52 border border-none rounded-md flex justify-center items-center">
        <img
          src="https://cottonon.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-women/default/dw0729b976/2053953/2053953-02-2.jpg?sw=640&sh=960&sm=fit"
          alt=""
          className="w-40 h-40 object-cover overflow-hidden object-center"
        />
      </div>
      <div className="flex justify-between">
        <p className="font-extralight">Spy x Family Tshirt</p>
        <p className="font-extralight text-[#1D9E34]">$26</p>
      </div>
      <p className="font-thin text-[#818B9C]">North Purwokerto</p>
      <span className="flex items-center gap-1">
        <AiFillStar className="text-[#FFA439]" />
        <p className="font-light">4.8</p>
      </span>
    </div>
  );
}

export default ProductCard;
