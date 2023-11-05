import { useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { useSearchParams } from "react-router-dom";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page") ? 1 : +searchParams.get("page");
  const pageCount = Math.ceil(count / 12);

  useEffect(()=>{
    searchParams.set('page',1)
    setSearchParams(searchParams)
  },[setSearchParams,searchParams])

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
    <div className="self-end flex gap-5">
      <button onClick={prevPage} disabled={currentPage === 1} className="flex items-center gap-2">
        <GrPrevious />
        Prev
      </button>
      <p>{currentPage}</p>
      <button
        onClick={nextPage}
        disabled={currentPage === pageCount}
        className="flex items-center gap-2"
      >
        Next
        <GrNext />
      </button>
    </div>
  );
}

export default Pagination;
