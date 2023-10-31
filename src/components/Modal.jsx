import useClickOutside from "../hooks/useClickOutside";
import useModal from "../hooks/useModal";

function Modal({ children }) {
  const { dispatch } = useModal();
  const dropRef = useClickOutside(() => dispatch({ type: "close" }));
  return (
    <div className="w-full h-full flex justify-center items-center fixed z-40">
      <div
        ref={dropRef}
        className="w-fit h-fit bg-[#ffffff] shadow-lg border-none rounded-md absolute z-30"
        style={{ minHeight: "60vh", minWidth: "30vw" }}
      >
        {children}
      </div>
      <div className="w-full h-full bg-[#d3d3d3] opacity-60 blur-md"></div>
    </div>
  );
}

export default Modal;
