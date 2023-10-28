import { HiMiniMagnifyingGlass } from "react-icons/hi2";

function SearchBox() {
  return (
    <form className="bg-[#D9D9D9] p-3 rounded-full">
      <input
        className="bg-transparent appearance-none border-none focus:outline-none"
        type="text"
        placeholder="search"
      />
      <button>
        <HiMiniMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchBox;
