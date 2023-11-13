import { useEffect } from "react";
import { ImGrin } from "react-icons/im";
import axios from "../../config/axios";
import { useState } from "react";
import { checkoutBid } from "../../services/apiCart";

function BidPayModal({ obj }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function addProductToStripe() {
      axios.patch("/bid/addBidProdToStripe", {
        bidProductId: obj.productId,
        latestBidPrice: obj.latestBidPrice,
      });
    }
    try {
      setIsLoading(true);
      addProductToStripe();
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [obj.productId, obj.latestBidPrice]);

  const onBidCheckout = async () => {
    try {
      const { paymentUrl } = await checkoutBid(obj.productId);
      window.location.replace(paymentUrl.url);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-[50vw] p-8 flex flex-col gap-5 font-light items-center text-lg">
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <span className="text-8xl text-green-600">
            <ImGrin />
          </span>
          <p>
            ขอแสดงความยินดีกับ คุณ{" "}
            <span className="font-medium">{obj.winnerName}</span>
          </p>
          <p>ชนะการประมูล</p>
          <div className="flex gap-5 border p-4 rounded-lg">
            <img
              src={obj.product.imageUrl}
              alt="product-image"
              className="w-28 aspect-square object-cover rounded-lg"
            />
            <div className="flex flex-col gap-3">
              <h1>{obj.product.name}</h1>
              <p className="text-xs text-gray-400">{obj.product.description}</p>
              <p>ราคาประมูล {obj.latestBidPrice}</p>
            </div>
          </div>
          <button
            className="bg-green-700 text-white px-4 py-2 rounded-lg"
            onClick={onBidCheckout}
          >
            จ่ายเงิน
          </button>
        </>
      )}
    </div>
  );
}

export default BidPayModal;
