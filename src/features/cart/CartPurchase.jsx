

export default function CartPurchase() {
  return (
    <div className="  p-2 w-[610px] h-[210px] border-2 flex flex-col gap-2 rounded-sm">
        <button className=" bg-black text-white rounded-xl p-2">Go to checkout</button>
        <div className=" flex justify-between">
            <p>item 2</p>
            <p>2000 Bath</p>
        </div>
        <div className=" flex justify-between">
            <p>Subtotal</p>
            <p>2000 Bath</p>
        </div>
    </div>
  )
}
