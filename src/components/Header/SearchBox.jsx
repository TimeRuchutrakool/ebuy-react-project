import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBox() {
  return (
    <form className="bg-[#F6F8FA] px-3 py-2 rounded-full w-6/12  flex justify-between mx-4 text-[#C4C8CC]">
      <input
        className="bg-transparent appearance-none border-none focus:outline-none w-full"
        type="text"
        placeholder="ค้นหาสินค้า"
      />
      <button onClick={(e) => e.preventDefault()} className="text-2xl">
        <HiMiniMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchBox;
