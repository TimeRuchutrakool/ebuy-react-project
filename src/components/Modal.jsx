import { useSearchParams } from "react-router-dom";
import useClickOutside from "../hooks/useClickOutside";
import useModal from "../hooks/useModal";
import { useEffect } from "react";

function Modal({ children }) {
  const { dispatch } = useModal();
  const [searchParams] = useSearchParams();
  const dropRef = useClickOutside(() =>
    searchParams.get("biding") ? () => {} : dispatch({ type: "close" })
  );
  useEffect(() => {}, []);
  return (
    <div className="w-full h-full flex justify-center items-center fixed z-50 ">
      <div
        ref={dropRef}
        className="w-fit h-fit bg-[#ffffff] shadow-lg border-none rounded-md absolute z-30"
        style={{ minWidth: "30vw" }}
      >
        {children}
      </div>
      <div className="w-full h-full bg-[#d3d3d3] opacity-75"></div>
    </div>
  );
}

export default Modal;
