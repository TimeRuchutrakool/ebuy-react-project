import { useNavigate } from "react-router-dom";

export default function CartPurchase({ totalPrice }) {
  const navigate = useNavigate();
  return (
    <div className=" p-3  border flex flex-col gap-2 rounded-md ">
      <div className=" flex justify-between font-light">
        <p>Total</p>
        <p>{totalPrice} ฿</p>
      </div>
      <div className=" flex justify-between">
        <p>Purchase</p>
        <p>{totalPrice} ฿</p>
      </div>
      <button
        className=" bg-[#1E4C2F] text-white rounded-xl p-2 mt-4"
        onClick={() => navigate("/order", { replace: true })}
      >
        Go to checkout
      </button>
    </div>
  );
}
