import CartProductCard from "./CartProductCard";
import CartPurchase from "./CartPurchase";

export default function CartProductLists() {
  return (
    <div className=" flex gap-4 w-full justify-around">
      <div className=" flex flex-col gap-4">
        <CartProductCard />
        <CartProductCard />
      </div>
      <div>
        <CartPurchase />
      </div>
    </div>
  );
}
