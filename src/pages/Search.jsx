import FilterOption from "../components/FilterOption";
import ProductCard from "../features/product/ProductCard";

export default function Search() {
  return (
    <div className="px-36  min-h-[59vh]">
      <div className="text-center py-10 text-2xl">Showing product</div>
      <div className="flex gap-8">
        <div className="w-1/5">
          <FilterOption />
        </div>
        <div className="w-4/5 grid grid-cols-3 place-items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
