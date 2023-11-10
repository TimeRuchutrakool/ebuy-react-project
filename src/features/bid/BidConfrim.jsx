import useModal from "../../hooks/useModal";

export default function BidConfrim() {
  const { dispatch: modal } = useModal();
  return (
    <div className="w-full max-w-full  bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="font-semibold text-xl  mt-8">Review your bid</div>
      <div className="grid  justify-center gap-4 grid-cols-2 py-3 ">
        <div>Current bid</div>
        <div>THB 540 ฿ .0 bids</div>
        <div>Your max bid </div>
        <div>THB 540 ฿</div>
        <div>Time left </div>
        <div className="text-gray-500">01:00:00 </div>
        <div> Shipping</div>
        <div>THB 540 ฿</div>
        <div>Duties</div>
        <div>THB 75 ฿</div>
        <div>Estimated total</div>
        <div>THB 615 ฿</div>
      </div>
      <div className="flex justify-end  m-8 ">
        <button
          type="button"
          className=" border-2 border-green-600  hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 "
        >
          Edit bid
        </button>
        <button
          type="button"
          className=" text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={() => {
            modal({ type: "bidReview" });
          }}
        >
          Confirm bid
        </button>
      </div>
    </div>
  );
}
