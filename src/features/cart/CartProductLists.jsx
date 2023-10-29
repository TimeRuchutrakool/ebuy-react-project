import CartProductCard from "./CartProductCard";
import CartPurchase from "./CartPurchase";


export default function CartProductLists() {
  return (
    <div className=" flex gap-4">
        <div className=" flex flex-col gap-1">
       <CartProductCard/>
       <CartProductCard/>
        </div>
       <CartPurchase/>
    </div>

  )
}
