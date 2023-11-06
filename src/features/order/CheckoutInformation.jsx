import ProductList from "./ProductList";
import ProductSummary from "./ProductSummary";
import ShippingAddress from "./ShippingAddress";

function CheckoutInformation() {
  return (
    <div className="px-24 flex gap-5 -translate-y-10">
      <div className="flex-grow flex flex-col gap-5">
        <ShippingAddress />
        <ProductList />
      </div>
      <div className="w-80">
        <ProductSummary />
      </div>
    </div>
  );
}

export default CheckoutInformation;
