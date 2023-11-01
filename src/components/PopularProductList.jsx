import ProductCard from "../features/product/ProductCard";
import Heading from "./Heading";

function PopularProductList() {
  return (
    <div className="w-full flex flex-col justify-center items-center  gap-10">
      <Heading big={true}>Popular Product on ebuy</Heading>

      <div className="w-10/12 grid grid-cols-4 place-items-center gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default PopularProductList;
