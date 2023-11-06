import { useSearchParams } from "react-router-dom";
import FilterOptionItem from "./FilterOptionItem";
export default function FilterOption() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className=" border border-[#E4E9EE] rounded-md">
      <div className="p-4 text-2xl ">Filter Option</div>
      <div className="flex justify-center">
        <hr className="w-5/6 bg-[#E4E9EE]  " />
      </div>
      <FilterOptionItem title="Type">
        {[
          { id: 1, name: "สินค้ามือหนึ่ง" },
          { id: 2, name: "สินค้ามือสอง" },
        ].map((type) => (
          <div
            key={type.id}
            className="cursor-pointer text-gray-400 hover:underline hover:text-black"
            onClick={() => {
              searchParams.set("type", type.id);
              setSearchParams(searchParams);
            }}
          >
            {type.name}
          </div>
        ))}
      </FilterOptionItem>

      <FilterOptionItem title="Price">
        {[
          { id: 1, price: "0-200" },
          { id: 2, price: "201-800" },
          { id: 3, price: "801-1000" },
          { id: 4, price: "1001-10000" },
        ].map((price) => (
          <div
            key={price.id}
            className="cursor-pointer text-gray-400 hover:underline hover:text-black "
            onClick={() => {
              searchParams.set("price", price.price);
              setSearchParams(searchParams);
            }}
          >
            {price.price} ฿
          </div>
        ))}
      </FilterOptionItem>
    </div>
  );
}
