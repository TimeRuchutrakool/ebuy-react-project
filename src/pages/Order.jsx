import CheckoutHeader from "../features/order/CheckoutHeader";
import CheckoutInformation from "../features/order/CheckoutInformation";

function Order() {
  return (
    <div className="w-full">
      <CheckoutHeader />
      <CheckoutInformation />
    </div>
  );
}

export default Order;
