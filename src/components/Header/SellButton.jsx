import { AiOutlinePlus } from "react-icons/ai";
import useModal from "../../hooks/useModal";

function SellButton() {
  const { dispatch: modal } = useModal();
  return (
    <button
      className="px-4 py-1 bg-[#1E4C2F] text-[#ffffff] text-sm border rounded-full flex items-center gap-1"
      onClick={() => {
        modal({ type: "bid" });
      }}
    >
      <AiOutlinePlus />
      <span> ลงขาย</span>
    </button>
  );
}

export default SellButton;
