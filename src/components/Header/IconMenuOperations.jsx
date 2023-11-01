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
  const { dispatch: modal } = useModal();
  const navigate = useNavigate();
  return (
    <div className="text-2xl flex gap-4 text-[#818B9C]">
      <button onClick={() => navigate("/cart")}>
        <BiSolidCart />
      </button>
      <div className="w-[1px] h-auto bg-[#E4E9EE]"></div>
      <button
        className="border border-[#E4E9EE] rounded-full p-2"
        onClick={() => {
          console.log(user);
          if (!user) return modal({ type: "login" });
          else setClickUser((open) => !open);
        }}
      >
        <BsFillPersonFill />
      </button>
      {user && clickUser && <ProfilePopUp setClickUser={setClickUser} />}
    </div>
  );
}

export default IconMenuOperations;
