import { useEffect } from "react";
import ProductCard from "../features/product/ProductCard";
import Heading from "./Heading";
import axios from "../config/axios";
import { useState } from "react";

function PopularProductList() {
  const [products, setProducts] = useState([]);
  console.log(
    "🚀 ~ file: PopularProductList.jsx:9 ~ PopularProductList ~ products:",
    products
  );

  useEffect(() => {
    axios.get("/product/productPopular").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center  gap-10">
      <Heading big={true}>Popular Product on ebuy</Heading>

      <div className="w-10/12 grid grid-cols-4 place-items-center gap-5">
        {products.map((product) => (
          <ProductCard
            key={product?.id}
            productImage={product?.productImage}
            name={product?.productName}
            price={product?.productPrice}
            avgRating={product?.rating}
            sellerFirstName={product?.sellerFirstName}
            sellerLastName={product?.sellerLastName}
          />
        ))}
      </div>
    </div>
  );
}

export default PopularProductList;
