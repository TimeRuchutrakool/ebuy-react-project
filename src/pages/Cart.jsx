import CartProductLists from "../features/cart/CartProductLists";
import Heading from "../components/Heading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCart } from "../store/slices/cartSlice";

export default function Cart() {
  const { cart } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(getCart());
  }, [dispatch]);
  return (
    <div className=" mx-48 mt-10 min-h-[63vh]">
      <div className="px-8 flex flex-col gap-2 mb-4">
        <Heading>Shopping cart</Heading>
        <p className="font-light text-sm text-gray-400 ">
          Showing your choices product
        </p>
      </div>
      {cart?.length > 0 ? (
        <CartProductLists />
      ) : (
        <div className="w-full h-full flex justify-center">
          <img src="src/assets/empty-cart.png" />
        </div>
      )}
    </div>
  );
}
