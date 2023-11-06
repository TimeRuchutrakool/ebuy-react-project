import { useSelector } from "react-redux";

function ProductSummary() {
  const { cart } = useSelector((store) => store.cart);
  
  return (
    <div className="p-5 bg-white border rounded-lg flex flex-col gap-3">
      <h1>ProductSummary</h1>
      {cart.map((product) => (
        <div
          key={product.id}
          className="w-full flex justify-between font-light"
        >
          <p>{product.name.slice(0, 20)}...</p>
          <p>{product.price}฿</p>
        </div>
      ))}
      <hr />
      <div className="w-full flex justify-between font-light">
        <p>Total Price</p>
        <p>{cart.reduce((acc, cur) => acc + Number(cur.price), 0)}฿</p>
      </div>
      <div className="w-full flex justify-between font-light">
        <p>Tax & Fee</p>
        <p>0 ฿</p>
      </div>
      <hr />
      <div className="w-full flex justify-between font-semibold">
        <p>Total Price</p>
        <p>{cart.reduce((acc, cur) => acc + Number(cur.price), 0)}฿</p>
      </div>
      <button className="bg-[#1E4C2F] text-white p-2 rounded-md">
        Checkout
      </button>
    </div>
  );
}

export default ProductSummary;
