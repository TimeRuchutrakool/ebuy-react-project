import { useEffect } from "react";
import FilterOption from "../components/FilterOption";
import ProductCard from "../features/product/ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function Search() {
  const [allProduct, setAllProduct] = useState([]);
  console.log("🚀 ~ file: Search.jsx:10 ~ Search ~ allProduct:", allProduct);
  const { searchedTitle } = useParams();

  useEffect(() => {
    axios
      .get(`/product/searchedTitle/${searchedTitle}`)
      .then((res) => setAllProduct(res.data.data));
  }, [searchedTitle]);

  return (
    <div className="px-36  min-h-[59vh]">
      <div className="text-center py-10 text-2xl">Showing product</div>
      <div className="flex gap-8">
        <div className="w-1/5">
          <FilterOption />
        </div>
        <div className="w-4/5 grid grid-cols-3 place-items-center">
          {allProduct.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              productImage={product.productImage}
              avgRating={product.avgRating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
