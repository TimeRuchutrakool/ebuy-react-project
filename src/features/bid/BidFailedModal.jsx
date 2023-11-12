import { useSearchParams } from "react-router-dom";
import { ImFrustrated } from "react-icons/im";
import useModal from "../../hooks/useModal";

function BidFailedModal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch: modal } = useModal();
  return (
    <div className="w-[30vw] p-8 flex flex-col gap-5 font-light items-center justify-around">
      <span className="text-8xl text-red-500">
        <ImFrustrated />
      </span>
      <p className="text-xl">ไม่เป็นไรนะ... ไว้ลองมาประมูลใหม่คราวหน้า</p>
      <button
        onClick={() => {
          searchParams.delete("biding");
          setSearchParams(searchParams);
          modal({ type: "close" });
        }}
        className="px-4 py-2 bg-red-600 text-white rounded-xl text-lg"
      >
        ออก
      </button>
    </div>
  );
}

export default BidFailedModal;
