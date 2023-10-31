import useClickOutside from "../hooks/useClickOutside";
import useModal from "../hooks/useModal";

function Modal({ children }) {
  const { dispatch } = useModal();
  const dropRef = useClickOutside(() => dispatch({ type: "close" }));
  return (
    <div
      ref={dropRef}
      className="w-fit h-fit bg-[#ffffff] shadow-lg border-none rounded-md flex justify-center items-start"
      style={{ minHeight: "60vh", minWidth: "40vw" }}
    >
      {children}
    </div>
  );
}

export default Modal;
