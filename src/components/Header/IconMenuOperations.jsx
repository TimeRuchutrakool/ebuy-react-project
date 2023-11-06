import { BiSolidCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ProfilePopUp from "../../features/user/ProfilePopUp";
import { useState } from "react";
import useModal from "../../hooks/useModal";
import { useSelector } from "react-redux";

function IconMenuOperations() {
  const [clickUser, setClickUser] = useState(false);
  const { user } = useSelector((store) => store.user);
  const { cart } = useSelector((store) => store.cart);
  const { dispatch: modal } = useModal();
  const navigate = useNavigate();
  return (
    <div className="text-2xl flex gap-4 text-[#818B9C]">
      <button
        onClick={() => {
          if (user) {
            navigate("/cart");
          } else modal({ type: "login" });
        }}
        className="relative"
      >
        <BiSolidCart />
        {cart.length > 0 && (
          <div className="w-5 h-5 flex justify-center items-center absolute -top-2 -right-3 text-sm text-white bg-green-900 p-3 rounded-full">
            {cart.length}
          </div>
        )}
      </button>
      <div className="w-[1px] h-auto bg-[#E4E9EE]"></div>
      <button
        onClick={() => {
          if (!user) return modal({ type: "login" });
          else setClickUser((open) => !open);
        }}
      >
        {user?.profileImage ? (
          <img
            src={`${user.profileImage}`}
            alt="profile-image"
            className="w-10 h-10 object-cover rounded-full"
          />
        ) : (
          <div className="border border-[#E4E9EE] rounded-full p-2">
            <BsFillPersonFill />
          </div>
        )}
      </button>
      {user && clickUser && <ProfilePopUp setClickUser={setClickUser} />}
    </div>
  );
}

export default IconMenuOperations;
