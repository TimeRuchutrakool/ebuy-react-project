import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBox() {
  return (
    <form className="bg-[#D9D9D9] px-3 py-2 rounded-full w-3/12 flex justify-between">
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
