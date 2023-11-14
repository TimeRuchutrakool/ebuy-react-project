import { AiOutlineShop } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import useModal from "../../hooks/useModal";
import { useSelector } from "react-redux";

export function Merchant({ product }) {
  const { dispatch: modal } = useModal();
  const { user } = useSelector((store) => store.user);
  return (
    <div className=" flex justify-between m-5 font-extralight">
      <div className="flex items-center gap-3">
        {product?.sellerImage ? (
          <img
            src={`${product.sellerImage}`}
            alt="seller-image"
            className="w-10 h-10 object-cover rounded-full"
          />
        ) : (
          <div className="border border-[#E4E9EE] rounded-full p-2">
            <BsFillPersonFill />
          </div>
        )}
        <p>
          {product?.sellerFirstName} {product?.sellerLastName}
        </p>
      </div>
      <div className="flex gap-3">
        <button
          className="border flex items-center justify-center gap-2 w-fit px-5 py-2 rounded-lg border-black"
          onClick={() => {
            if (user) {
              modal({
                type: "chat",
                payload: {
                  id: product.sellerId,
                  firstName: product.sellerFirstName,
                  lastName: product.sellerLastName,
                },
              });
            } else modal({ type: "login" });
          }}
        >
          <HiOutlineChatAlt2 />
          <span>Chat</span>
        </button>
        <button className="border flex items-center justify-center gap-2 w-fit px-5 py-2 rounded-lg border-black">
          <AiOutlineShop />
          <span>Visit Merchant</span>
        </button>
      </div>
    </div>
  );
}
