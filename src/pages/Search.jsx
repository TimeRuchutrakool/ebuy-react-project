import { useEffect } from "react";
import FilterOption from "../components/FilterOption";
import ProductCard from "../features/product/ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [allProduct, setAllProduct] = useState([]);

  const { searchedTitle } = useParams();
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();

  useEffect(() => {}, []);

  useEffect(() => {
    axios
      .get(
        `/product/search/${searchedTitle}?${
          searchParams.get("page") ? searchParams.get("page") : ""
        }${searchParams.get("type") ? searchParams.get("type") : ""}${
          searchParams.get("price") ? searchParams.get("price") : ""
        }`
      )
      .then((res) => console.log(res.data));
  }, [searchedTitle, searchParams]);

  return (
    <div className="px-36  min-h-[59vh] flex flex-col">
      <div className="text-center py-10 text-2xl">Showing product</div>
      <div className="flex gap-8">
        <div className="w-1/5">
          <FilterOption />
        </div>
        <div className="w-4/5 grid h-fit gap-5 grid-cols-3 items-start place-items-center">
          {allProduct.map((product) => (
            <ProductCard
              key={product?.id}
              id={product?.id}
              name={product?.name}
              price={product?.price}
              productImage={product?.ProductImage}
              avgRating={product?.avgRating}
            />
          ))}
        </div>
      </div>
      <Pagination />
    </div>
  );
}
