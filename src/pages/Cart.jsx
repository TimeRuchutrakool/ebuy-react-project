import CartProductLists from "../features/cart/CartProductLists";

export default function Cart() {
  return (
    <div className=" pr-48 pl-48 pt-4 min-h-[67vh]  ">
      <div className="px-8 flex flex-col gap-2 mb-4">
        <p className="font-medium text-xl">Shopping cart</p>
        <p className="font-light text-sm text-gray-400 ">
          Showing your choices product
        </p>
      </div>
      <CartProductLists />
    </div>
  );
}
