import { useState, useEffect } from "react";
import { getBidProducts as getBidProductsAPI } from "../services/apiProduct";
import BidProductCard from "../features/bid/BidProductCard";

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
