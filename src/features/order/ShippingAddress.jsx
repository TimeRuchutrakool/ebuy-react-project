import { FiMapPin } from "react-icons/fi";
import useModal from "../../hooks/useModal";
import { useSelector } from "react-redux";

function ShippingAddress() {
  const { dispatch: modal } = useModal();
  const { user, address } = useSelector((store) => store.user);
  return (
    <div className="bg-white rounded-lg border p-5 flex flex-col gap-4">
      <h1>Shipping Address</h1>
      <div className=" flex items-center justify-between">
        <div className="flex flex-col gap-2 text-sm font-light">
          <p>
            {user.firstName} {user.lastName}
          </p>
          <span className="flex items-center gap-2 text-[#818B9C]">
            <span className="text-[#1D9E34]">
              <FiMapPin />
            </span>
            {address?.address ||
            address?.city ||
            address?.province ||
            address?.postalcode ? (
              <p>
                {Object.keys(address ?? {})
                  .filter((key) => key !== "id" && key !== "userId")
                  .map((key, index) => (
                    <span key={index}>{address[key] + " "}</span>
                  ))}
              </p>
            ) : (
              <p>Please add your address before checkout.</p>
            )}
          </span>
        </div>
        <button
          className="border p-3 text-sm font-light rounded-lg border-[#1D9E34] text-[#42744c]"
          onClick={() => modal({ type: "address" })}
        >
          Change Address
        </button>
      </div>
    </div>
  );
}
export default ShippingAddress;
