import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";

function HamburgerMenu() {
    const {showHamburger,setShowHamburger} = useHamburgerMenu()
  return (
    <button
      className="ms-4 flex flex-col gap-1 sm:hidden"
      onClick={() => setShowHamburger((show) => !show)}
    >
      <div
        className={`w-6 h-1 bg-[#000000] transition-all ${
          showHamburger ? "rotate-45 translate-y-full" : "rotate-0"
        }`}
      ></div>
      <div
        className={`w-6 h-1 bg-[#000000] ${
          showHamburger && "hidden transition-all"
        }`}
      ></div>
      <div
        className={`w-6 h-1 bg-[#000000] transition-all ${
          showHamburger ? "-rotate-45 -translate-y-full" : "rotate-0"
        }`}
      ></div>
    </button>
  );
}

export default HamburgerMenu;
