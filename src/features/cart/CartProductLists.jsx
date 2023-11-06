import { useSelector } from "react-redux";
import CartProductCard from "./CartProductCard";
import CartPurchase from "./CartPurchase";
import { useEffect } from "react";
import { useState } from "react";

export default function CartProductLists() {
  const { cart } = useSelector((store) => store.cart);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(() => {
      return cart.reduce((acc, cur) => {
        return acc + Number(cur.price) * cur.amount;
      }, 0);
    });
  }, [cart]);

  return (
    <div className="grid gap-4 w-full grid-cols-4 ">
      <div className=" flex flex-col gap-4 col-span-3">
        {cart.map((product) => (
          <CartProductCard
            key={product.cartItemId}
            product={product}
            setTotalPrice={setTotalPrice}
          />
        ))}
      </div>
      <div className="col-span-1">
        <CartPurchase totalPrice={totalPrice} />
      </div>
    </div>
  );
}
