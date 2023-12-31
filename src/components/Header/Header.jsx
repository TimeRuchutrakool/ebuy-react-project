import IconMenuOperations from "./IconMenuOperations";
import Logo from "../Logo";
import SearchBox from "./SearchBox";
import SellButton from "./SellButton";

function Header() {
  return (
    <nav
      className="flex items-center justify-around sticky top-0 bg-[#ffffff] py-4 shadow-md z-40"
      style={{ height: "15vh" }}
    >
      <Logo />
      <SearchBox />
      <IconMenuOperations />
      <SellButton />
    </nav>
  );
}

export default Header;
