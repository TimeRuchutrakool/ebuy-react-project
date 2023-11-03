export default function CartPurchase() {
  return (
    // w-[610px] h-[200px]
    <div className=" w-[610px]  p-3  border flex flex-col gap-2 rounded-md ">
      <div className=" flex justify-between">
        <p>item 2</p>
        <p>2000 Bath</p>
      </div>
      <div className=" flex justify-between">
        <p>Subtotal</p>
        <p>2000 Bath</p>
      </div>
      <button className=" bg-[#1E4C2F] text-white rounded-xl p-2 mt-4">
        Go to checkout
      </button>
    </div>
  );
}
