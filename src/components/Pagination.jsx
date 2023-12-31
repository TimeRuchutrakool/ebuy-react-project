import { useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSearchParams } from "react-router-dom";

function Pagination({ count, setPage, setType, setPrice }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pageCount = Math.ceil(count / 12);

  useEffect(() => {
    setPage(searchParams.get("page"));
    setType(searchParams.get("type"));
    setPrice(searchParams.get("price"));
  }, [searchParams, setPage, setPrice, setType]);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next);
    setSearchParams(searchParams);
  }
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }
  return (
    <div className="self-end flex gap-5 mt-16">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 font-light ${
          currentPage === 1 && "text-gray-400"
        }`}
      >
        <GrPrevious />
        Prev
      </button>
      <p>{currentPage}</p>
      <button
        onClick={nextPage}
        disabled={currentPage === pageCount}
        className={`flex items-center gap-2 font-light ${
          currentPage === pageCount && "text-gray-400"
        }`}
      >
        Next
        <GrNext />
      </button>
    </div>
  );
}

export default Pagination;
