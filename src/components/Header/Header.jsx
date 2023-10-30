import IconMenuOperations from "./IconMenuOperations";
import Logo from "../Logo";
import SearchBox from "./SearchBox";
import SellButton from "./SellButton";
import ProfilePopUp from "../../features/user/ProfilePopUp";

function Header() {
  return (
    <nav className="flex items-center justify-around sticky top-0 bg-[#ffffff] py-4">
      <Logo />
      <SearchBox />
      <IconMenuOperations />
      <SellButton />
      <ProfilePopUp />
    </nav>
  );
}

export default Header;
