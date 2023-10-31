import { AiOutlineShop, AiOutlineLogout } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { GoTag } from "react-icons/go";
import { BsCoin } from "react-icons/bs";
import useClickOutside from "../../hooks/useClickOutside";

function ProfilePopUp({ setClickUser }) {
  const dropRef = useClickOutside(() => setClickUser((open) => !open));
  return (
    <div
      ref={dropRef}
      className="w-3/12 bg-[#ffffff] shadow-lg absolute top-16 right-5 p-5 rounded-lg flex flex-col gap-2 text-sm font-light cursor-default"
    >
      <ImageAndUsername />
      <HorizontalLine />
      <Point />
      <HorizontalLine />
      <Menu />
      <HorizontalLine />
      <Logout />
    </div>
  );
}

export default ProfilePopUp;

function ImageAndUsername() {
  return (
    <div className="flex items-center gap-5">
      <img
        src="https://i.scdn.co/image/ab67616100005174d95cf4457fac4cc62311f84f"
        alt="profile-image"
        className="w-10 h-10 object-cover rounded-full"
      />
      <h1 className="text-base text-[#0B0F0E] font-normal">Yelena Stacia</h1>
    </div>
  );
}

function HorizontalLine() {
  return <div className="w-full h-[1px] bg-[#E4E9EE]"></div>;
}

function Point() {
  return (
    <div className="flex flex-col items-start gap-2">
      <p>My point</p>
      <div className="flex justify-between w-full">
        <div className="flex gap-2 items-center">
          <BsCoin />
          <span>Point</span>
        </div>
        <span>0.00</span>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex flex-col items-start gap-2">
      <p>Menu</p>
      <div className="flex flex-col items-start w-full gap-2 text-[#818B9C]">
        <div className="flex gap-2 items-center cursor-pointer">
          <AiOutlineShop />
          <span>หน้าร้านของฉัน</span>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <GoTag />
          <span>คำสั่งซื้อ</span>
        </div>
        <div className="flex gap-2 items-center cursor-pointer">
          <MdOutlineFavoriteBorder />
          <span>รายการโปรด</span>
        </div>
      </div>
    </div>
  );
}

function Logout() {
  return (
    <div className="text-[#E04124] cursor-pointer">
      <div className="flex gap-2 items-center">
        <AiOutlineLogout />
        <span>ออกจากระบบ</span>
      </div>
    </div>
  );
}
