import React from "react";
import { useState } from "react";
import CartProductLists from "../features/cart/CartProductLists";
import { BiSolidStore, BiDollarCircle, BiSolidCarGarage } from "react-icons/bi";
import SellerCardProduct from "../components/SellerCardProduct";
import CardBidProduct from "../components/SellerCardBidProduct";
import EditProfile from "../components/EditProfile";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "../config/axios";
import { getMystore } from "../services/apiAuth";

export default function ProductProfile() {
  const [click, setClick] = useState("marketplace");
  const { user } = useSelector((store) => store.user);
  const [store, setStore] = useState([]);

  useEffect(() => {
    getMystore().then((res) => {
      setStore(() => res.myStore);
    });
  }, []);

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
                id={el.id}
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
