import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SearchBox() {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputSearch) {
      navigate(`/search/${inputSearch}`);
    }
  };
  return (
    <form
      className="bg-[#F6F8FA] px-3 py-2 rounded-full w-6/12  flex justify-between mx-4 text-[#C4C8CC]  "
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent appearance-none border-none focus:outline-none w-full"
        type="text"
        placeholder="ค้นหาสินค้า"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <button className="text-2xl">
        <HiMiniMagnifyingGlass />
      </button>
    </form>
  );
}

export default SearchBox;
