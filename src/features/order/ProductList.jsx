import { useSelector } from "react-redux";

function ProductList() {
  const { cart } = useSelector((store) => store.cart);

  return (
    <div className="bg-white rounded-lg border p-5 flex flex-col gap-5">
      <h1>Product to order</h1>
      {cart.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;

function ProductCard({ product }) {
  return (
    <div className="border-b-[1px] flex items-center justify-between text-sm font-extralight p-3 last:border-none">
      <div className="flex flex-col justify-between gap-3">
        <span className="font-medium text-lg">{product.name}</span>
        <span>
          {product.sellerFirstName} {product.sellerLastName}
        </span>
        <span className="text-green-800">{product.price} ฿</span>
      </div>
      <img
        src={product.productImageUrl}
        alt="product-image"
        className="w-24 h-24 object-cover rounded-lg"
      />
    </div>
  );
}
