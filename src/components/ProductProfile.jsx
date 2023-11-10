import { useState } from "react";
import { BiSolidStore, BiDollarCircle } from "react-icons/bi";
import SellerCardProduct from "../components/SellerCardProduct";
import CardBidProduct from "../components/SellerCardBidProduct";
import EditProfile from "../components/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMystore } from "../services/apiAuth";
import { getProduct } from "../store/slices/productSlice";

export default function ProductProfile() {
  const [click, setClick] = useState("marketplace");
  // const { user } = useSelector((store) => store.user);
  const [store, setStore] = useState([]);
  const dispatch = useDispatch();
  const { stores } = useSelector((store) => store.product);
  console.log(stores);
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  console.log("fff", stores);
  return (
    <div className="w-[calc(100%+300px)]">
      <div className="mt-24 flex flex-row justify-center bg-white shadow-md">
        <button
          onClick={() => setClick("marketplace")}
          className={`border-t border-b border-r w-full p-4 flex justify-center hover:bg-green-900 opacity-70  items-center gap-2 hover:text-white text-green-900 cursor-pointer  ${
            click === "marketplace" ? "bg-green-900 opacity-100 text-white" : ""
          }`}
        >
          <BiSolidStore className="text-xl" />
          <h1>Markter</h1>
        </button>
        <button
          onClick={() => setClick("bidproduct")}
          className={`border-t border-b w-full p-4 flex justify-center hover:bg-green-900 opacity-70 items-center gap-2 hover:text-white text-green-900 cursor-pointer ${
            click === "bidproduct" ? "bg-green-900 opacity-100 text-white" : ""
          }`}
        >
          <BiDollarCircle className="text-xl " />
          <h1>Bid product</h1>
        </button>
      </div>

      <div className="pt-4">
        {click === "marketplace" ? (
          <div className="grid grid-cols-5 place-items-center">
            {stores?.map((el) => (
              <SellerCardProduct
                key={el.id}
                name={el.name}
                price={el.price}
                imageUrl={el.imageUrl}
                des={el.description}
                id={el.id}
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
