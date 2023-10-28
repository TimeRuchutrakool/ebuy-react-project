import Logo from "./Logo";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <div className="flex items-center justify-around">
      <Logo />
      <div>
        <div>Home</div>
        <div>Category</div>
        <div>Category2</div>
      </div>
      <SearchBox />
    </div>
  );
}

export default Header;
