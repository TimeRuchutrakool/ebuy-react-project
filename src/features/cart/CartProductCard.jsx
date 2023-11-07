import { useState } from "react";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { deleteProductFromCart, updateAmount } from "../../services/apiCart";
import { useDispatch } from "react-redux";
import { getCart } from "../../store/slices/cartSlice";

export default function CartProductCard({ product, setTotalPrice }) {
  const [amount, setAmount] = useState(() => product.amount);
  const dispatch = useDispatch();

  const onIncreaseAmount = async () => {
    setAmount((amount) => amount + 1);
    setTotalPrice((total) => total + Number(product.price));
    await updateAmount("increase", product.cartItemId);
  };
  const onDecreaseAmount = async () => {
    if (amount <= 1) return;
    setAmount((amount) => amount - 1);
    setTotalPrice((total) => total - Number(product.price));
    await updateAmount("decrease", product.cartItemId);
  };

  const onDelete = async () => {
    await deleteProductFromCart(product.cartItemId);
    dispatch(getCart());
  };

  return (
    <div className=" p-4 shadow-sd  flex flex-col gap-2 rounded-md border border-borderColor">
      {/* seller */}
      <div className="flex gap-4 mb-4 items-center">
        {product.profileImageUrl ? (
          <img
            src={`${product.profileImageUrl}`}
            alt="profile-image"
            className="w-12 h-12 object-cover rounded-full"
          />
        ) : (
          <div className="border border-[#E4E9EE] rounded-full p-2">
            <BsFillPersonFill />
          </div>
        )}
        <p className="font-normal">
          Seller : {product.sellerFirstName} {product.sellerLastName}
        </p>
      </div>
      {/* product */}
      <div className="flex gap-8 justify-end w-full">
        <div>
          <img
            src={product.productImageUrl}
            alt=""
            className="w-24 h-24 object-cover  rounded-md"
          />
        </div>
        <div className="flex flex-col flex-grow">
          <p>{product.name}</p>
          <p className="font-extralight">
            size :{" "}
            {
              product[
                `${Object.keys(product).find((key) =>
                  key.includes("SizeName")
                )}`
              ]
            }
          </p>
          <p className="font-extralight">color : {product.colorName}</p>
          <p className="flex items-center text-[#1D9E34] text-xl">
            {product.price} ฿
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex border border-borderColor py-1 px-2 rounded-md w-24 justify-around">
            <button
              className="self-center cursor-pointer hover:text-[#E04124]"
              onClick={onDecreaseAmount}
            >
              <FiMinus />
            </button>
            <div className="self-center">{amount}</div>
            <button
              className="self-center cursor-pointer hover:text-[#1D9E34]"
              onClick={onIncreaseAmount}
            >
              <FiPlus />
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="  cursor-pointer border border-borderColor rounded-md p-2  hover:text-[#E04124]"
            onClick={onDelete}
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
    </div>
  );
}
