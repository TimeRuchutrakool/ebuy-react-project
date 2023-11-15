import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBidProducts as getBidProductsAPI } from "../services/apiProduct";
import { RiAuctionFill } from "react-icons/ri";
import CountDown from "../features/bid/CountDown";

function BidList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getBidProducts() {
      try {
        const res = await getBidProductsAPI();
        setProducts(() => res.bidProducts);
      } catch (error) {
        console.log(error.message);
      }
    }
    getBidProducts();
  }, []);
  return (
    <div className="p-10" style={{ minHeight: "70vh" }}>
      {products.length > 0 ? (
        <div className="flex flex-col items-center gap-5">
          <p className="text-xl flex items-center gap-5 text-green-900">
            แสดงสินค้าประมูล
          </p>
          <div className="grid grid-cols-5 gap-10 mt-5">
            {products.map((product) => (
              <BidProductCard key={product?.id} product={product} />
            ))}
          </div>
        </div>
      ) : (
        <div className="w-full h-[70vh] flex justify-center items-center">
          <p>There is no auctioning sessions right now.</p>
        </div>
      )}
    </div>
  );
}

export default BidList;

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
