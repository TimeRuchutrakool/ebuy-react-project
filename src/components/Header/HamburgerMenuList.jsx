import { useHamburgerMenu } from "../../hooks/useHamburgerMenu";

const listOption = "flex justify-center my-3";

function HamburgerMenuList() {
  const { showHamburger } = useHamburgerMenu();
  return (
    <div
      className={`${
        !showHamburger && "hidden"
      } sm:hidden absolute top-16 bg-[#ffffff] w-full`}
    >
      <ul className="list-none">
        <li className={listOption}>หน้าแรก</li>
        <li className={listOption}>รายการโปรด</li>
        <li className={listOption}>ตะกร้าสินค้า</li>
        <li className={listOption}>บัญชี</li>
      </ul>
    </div>
  );
}

export default HamburgerMenuList;
