import { HiMagnifyingGlass } from "react-icons/hi2";
function SearchChatBox() {
  return (
    <form
      className="mx-4 my-3 bg-[#EFF5FB] flex justify-between px-3 py-2 rounded-3xl font-extralight text-sm"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        placeholder="search"
        className="bg-transparent w-full outline-none"
      />
      <button>
        <HiMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchChatBox;
