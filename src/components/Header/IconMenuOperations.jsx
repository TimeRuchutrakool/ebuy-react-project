import { GrFavorite } from "react-icons/gr";
import { BiSolidCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function IconMenuOperations() {
  const navigate = useNavigate()
  return (
    <div className="text-3xl hidden sm:flex gap-4">
      <button>
        <GrFavorite />
      </button>
      <button onClick={()=> navigate("/cart")}>
        <BiSolidCart />
      </button>
      <button>
        <BsFillPersonFill />
      </button>
    </div>
  );
}

export default IconMenuOperations;
