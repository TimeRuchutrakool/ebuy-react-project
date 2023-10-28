import IconMenuOperations from "./IconMenuOperations";
import Logo from "../Logo";
import RouteMenuOperations from "./RouteMenuOperations";
import SearchBox from "./SearchBox";
import SellButton from "./SellButton";
import HamburgerMenu from "./HamburgerMenu";
import HamburgerMenuList from "./HamburgerMenuList";

function Header() {
  
  return (
    <nav className="flex items-center justify-around sticky top-0 bg-[#ffffff] py-4">
      <HamburgerMenu />
      <HamburgerMenuList />
      <Logo />
      <RouteMenuOperations />
      <SearchBox />
      <IconMenuOperations />
      <SellButton />
    </nav>
  );
}

export default Header;
