import FilterOptionItem from "./FilterOptionItem";
export default function FilterOption() {
  return (
    <div className=" border border-[#E4E9EE] rounded-md">
      <div className="p-4 text-2xl ">Filter Option</div>
      <div className="flex justify-center">
        <hr className="w-5/6 bg-[#E4E9EE]  " />
      </div>
      <FilterOptionItem title="Type">
        <div className="cursor-pointer text-gray-400 hover:underline hover:text-black ">
          สินค้ามือหนึ่ง
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          สินค้ามือสอง
        </div>
      </FilterOptionItem>

      <FilterOptionItem title="Size">
        <div className="cursor-pointer text-gray-400 hover:underline hover:text-black ">
          S
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          M
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          L
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          XL
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          XXL
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          3XL
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          4XL
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          5XL
        </div>
      </FilterOptionItem>

      <FilterOptionItem title="Price">
        <div className="cursor-pointer text-gray-400 hover:underline hover:text-black ">
          0 - 200 ฿
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          200 - 800 ฿
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          800 - 1000 ฿
        </div>
        <div className="cursor-pointer  text-gray-400 hover:underline hover:text-black ">
          1000 - 10000 ฿
        </div>
      </FilterOptionItem>
    </div>
  );
}
