import { FiMapPin } from "react-icons/fi";

function ShippingAddress() {
  return (
    <div className="bg-white rounded-lg border p-5 flex flex-col gap-4">
      <h1>Shipping Address</h1>
      <div className=" flex items-center justify-between">
        <div className="flex flex-col gap-2 text-sm font-light">
          <p>Gofanny Karina</p>
          <span className="flex items-center gap-2 text-[#818B9C]">
            <span className="text-[#1D9E34]">
              <FiMapPin />
            </span>
            <p>2021 Royalty Boulevard Portland, OR 98199</p>
          </span>
        </div>
        <button className="border p-3 text-sm font-light rounded-lg border-[#1D9E34] text-[#42744c]">
          Change Address
        </button>
      </div>
    </div>
  );
}
export default ShippingAddress;
