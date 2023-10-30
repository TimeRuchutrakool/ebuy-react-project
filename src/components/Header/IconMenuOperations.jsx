import { BiSolidCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ProfilePopUp from "../../features/user/ProfilePopUp";
import { useState } from "react";

function IconMenuOperations() {
  const [openProfilePopup, setOpenProfilePopup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="text-2xl flex gap-4 text-[#818B9C]">
      <button onClick={() => navigate("/cart")}>
        <BiSolidCart />
      </button>
      <div className="w-[1px] h-auto bg-[#E4E9EE]"></div>
      <button
        className="border border-[#E4E9EE] rounded-full p-2"
        onClick={(e) => {
          e.preventDefault();
          setOpenProfilePopup((open) => !open);
        }}
      >
        <BsFillPersonFill />
      </button>
      {openProfilePopup && (
        <ProfilePopUp setOpenProfilePopup={setOpenProfilePopup} />
      )}
    </div>
  );
}

export default IconMenuOperations;
