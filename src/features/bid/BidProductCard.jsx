import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiAuctionFill } from "react-icons/ri";
import CountDown from "./CountDown";

function BidProductCard({ product }) {
  const navigate = useNavigate();
  const [biding, setBiding] = useState(false);
  return (
    <div
      className={`flex flex-col p-5 gap-3 cursor-pointer relative ${
        biding ? "border-4 border-red-600 shadow" : "border"
      }`}
      onClick={() => navigate(`../bid/${product.id}`)}
    >
      {biding && (
        <div className="absolute -top-4 -right-4 bg-red-600 rounded-md">
          <p className="flex items-center gap-3 p-1 text-white">
            กำลังประมูล <RiAuctionFill />
          </p>
        </div>
      )}
      <img
        src={product?.imageUrl}
        alt="product-image"
        className="p-2 object-cover aspect-square"
      />
      <p className="text-sm font-medium">{product?.name}</p>
      <hr />
      <div className="flex justify-between text-sm">
        <p>ประมูลเริ่มต้นที่</p>
        <p className="text-green-500">฿ {product?.price}</p>
      </div>
      <p className="text-sm font-light">โดย {product?.sellerName}</p>
      <div className="text-sm flex justify-between items-center">
        <span>เริ่มประมูลใน</span>
        <CountDown
          targetDate={product?.startedAt}
          duration={product?.duration}
          textSize="text-sm"
          setDisabledIsBiding={() => {}}
          setBiding={setBiding}
        />
      </div>
    </div>
  );
}

export default BidProductCard;
