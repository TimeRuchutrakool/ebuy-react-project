import { useState } from "react";
import { BiSolidStore, BiDollarCircle } from "react-icons/bi";
import SellerCardProduct from "../components/SellerCardProduct";
import CardBidProduct from "../components/SellerCardBidProduct";
import { useEffect } from "react";
import { getMystore } from "../services/apiAuth";

export default function ProductProfile() {
  const [click, setClick] = useState("marketplace");
  const [store, setStore] = useState([]);

  useEffect(() => {
    getMystore().then((res) => {
      setStore(() => res.myStore);
      console.log(store);
    });
  }, [store]);

  console.log(store);
  return (
    <div className="w-full">
      <div className="mt-24 flex flex-row justify-center shadow-md bg-white ">
        <button
          onClick={() => setClick("marketplace")}
          className="border border-t-2 w-full p-4 flex justify-center hover:bg-gray-300  items-center gap-2 hover:text-white text-green-900 cursor-pointer "
        >
          <BiSolidStore className="text-xl " />
          <h1 className="">Markter</h1>
        </button>
        <button
          onClick={() => setClick("bidproduct")}
          className="border border-gray-200 border-t-2 w-full p-4 flex justify-center hover:bg-gray-300 items-center gap-2 hover:text-white text-green-900 cursor-pointer"
        >
          <BiDollarCircle className="text-xl " />
          <h1 className="">Bid product</h1>
        </button>
      </div>
      <div className="pt-4">
        {click === "marketplace" ? (
          <div className="grid grid-cols-5 place-items-center">
            {store?.map((el) => (
              <SellerCardProduct
                key={el.id}
                name={el.name}
                price={el.price}
                imageUrl={el.imageUrl}
                des={el.description}
              />
            ))}
          </div>
        ) : (
          ""
        )}
        {click === "bidproduct" ? (
          <div className="grid-cols-5 grid place-items-center ">
            <CardBidProduct />
            <CardBidProduct />
            <CardBidProduct />
            <CardBidProduct />
            <CardBidProduct />
            <CardBidProduct />
            <CardBidProduct />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
