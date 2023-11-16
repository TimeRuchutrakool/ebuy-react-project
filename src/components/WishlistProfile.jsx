import { useState } from "react";
import WishlistCard from "./WishlistCard";
import { useEffect } from "react";
import axios from "../config/axios";

export default function WishlistProfile() {
  const [product, setProduct] = useState([]);
  const [isWish, setIsWish] = useState(true);
  console.log(
    "🚀 ~ file: WishlistProfile.jsx:14 ~ WishlistProfile ~ product:",
    product
  );

  useEffect(() => {
    axios.get("/wish").then((res) => setProduct(res.data.products));
  }, [isWish]);
  return (
    <div className="mt-24 w-full">
      <h1 className="p-4 pl-8 text-green-900 border-t shadow-md ">
        รายการโปรด
      </h1>
      <div className="grid grid-cols-5 place-items-center pt-8 pl-2 gap-5 ">
        {product.map((product) => (
          <WishlistCard
            isWish={isWish}
            setIsWish={setIsWish}
            product={product}
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
