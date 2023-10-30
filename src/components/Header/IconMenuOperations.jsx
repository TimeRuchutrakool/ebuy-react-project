import { BiSolidCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function IconMenuOperations() {
  const navigate = useNavigate();
  return (
    <div className="text-2xl flex gap-4 text-[#818B9C]">
      <button onClick={() => navigate("/cart")}>
        <BiSolidCart />
      </button>
      <div className="w-[1px] h-auto bg-[#E4E9EE]"></div>
      <button className="border border-[#E4E9EE] rounded-full p-2">
        <BsFillPersonFill />
      </button>
    </div>
  );
}

export default IconMenuOperations;
