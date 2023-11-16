import { useNavigate } from "react-router-dom";
import useModal from "../hooks/useModal";
import { useSearchParams } from "react-router-dom";

export default function CardProduct({ name, price, imageUrl, id }) {
  const { dispatch: modal } = useModal();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className=" bg-white shadow-lg w-56  rounded-md">
      <img
        src={imageUrl}
        alt=""
        className="object-cover aspect-square rounded-ss-md rounded-se-md"
      />
      <div>
        <div className="p-3">
          <div className="flex justify-between">
            <h1 className="line-clamp-1">{name}</h1>
            <h1 className="text-green-600">{price}</h1>
          </div>
        </div>
        <div className="flex justify-evenly p-3 gap-2 h-full ">
          <button
            className="bg-gray-300 w-full rounded-md"
            onClick={() => {
              navigate(`/editProduct/${id}`);
            }}
          >
            แก้ไข
          </button>
          <button
            className="bg-red-600 text-white w-full rounded-md"
            onClick={() => {
              searchParams.set("productId", id);
              setSearchParams(searchParams);
              modal({ type: "confirmDelete" });
            }}
          >
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}
