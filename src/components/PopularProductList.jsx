import { useEffect } from "react";
import ProductCard from "../features/product/ProductCard";
import Heading from "./Heading";
import axios from "../config/axios";
import { useState } from "react";

function PopularProductList() {
  const [product, setProduct] = useState([]);
  console.log(
    "🚀 ~ file: PopularProductList.jsx:9 ~ PopularProductList ~ product:",
    product
  );
  useEffect(() => {
    axios.get("/product/productPopular").then((res) => {
      setProduct(res.data.productPopular);
    });
  }, []);
  return (
    <div className="w-full flex flex-col justify-center items-center  gap-10">
      <Heading big={true}>Popular Product on ebuy</Heading>

      <div className="w-10/12 grid grid-cols-4 place-items-center gap-5">
        {<ProductCard />}
      </div>
    </div>
  );
}

export default PopularProductList;
