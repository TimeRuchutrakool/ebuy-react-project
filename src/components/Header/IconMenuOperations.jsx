import { GrFavorite } from "react-icons/gr";
import { BiSolidCart } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";

function IconMenuOperations() {
  return (
    <div className="text-3xl hidden sm:flex gap-4">
      <button>
        <GrFavorite />
      </button>
      <button>
        <BiSolidCart />
      </button>
      <button>
        <BsFillPersonFill />
      </button>
    </div>
  );
}

export default IconMenuOperations;
