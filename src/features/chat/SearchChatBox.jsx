import { HiMagnifyingGlass } from "react-icons/hi2";
import { useChat } from "./useChat";
function SearchChatBox() {
  const { searchQuery, setSearchQuery } = useChat();
  return (
    <div className="mx-4 my-3 bg-[#EFF5FB] flex justify-between items-center px-3 py-2 rounded-3xl font-extralight text-sm">
      <input
        type="text"
        placeholder="search"
        className="bg-transparent w-full outline-none"
        value={searchQuery}
        onChange={(e) => setSearchQuery(() => e.target.value)}
      />
        <HiMagnifyingGlass />
    </div>
  );
}

export default SearchChatBox;
