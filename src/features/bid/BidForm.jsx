import useModal from "../../hooks/useModal";

export default function BidForm() {
  const { dispatch: modal } = useModal();
  return (
    <div className="w-full max-w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="py-2 text-lg">place your bid</div>
      <div className="py-2">(ประมาณ THB 540 + 150 shipping)</div>
      <div className="py-2 text-gray-500">(1 bid 1 :00:00 left)</div>

      <div className="grid  justify-center gap-4 grid-cols-3 py-3  ">
        <div className="bg-green-700 cursor-pointer  text-white rounded-full px-2 py-2 font-medium flex items-center justify-center  ">
          Bid ฿500
        </div>
        <div className="bg-green-700 cursor-pointer  text-white rounded-full px-2 py-2 font-medium flex items-center justify-center ">
          Bid ฿550
        </div>
        <div className="bg-green-700 cursor-pointer  text-white rounded-full px-2 py-2 font-medium flex items-center justify-center ">
          Bid ฿600
        </div>
      </div>
      <br></br>
      <div className="grid grid-cols-9 ">
        <hr className="col-span-4 "></hr>
        <div className="text-center pb-2">or</div>
        <hr className="col-span-4"></hr>
      </div>

      <div className=" gap-3  gap-x-8">
        <label
          for="price"
          className="flex text-sm items-end   font-medium text-green-700 dark:text-green-500 "
        >
          Your max bid
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full  rounded-xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
          />
          <div
            className="bg-green-700   cursor-pointer  text-white rounded-full px-3 py-2 font-medium flex items-center justify-center w-96 "
            onClick={() => {
              modal({ type: "bidConfrim" });
            }}
          >
            Confirm bid
          </div>
        </div>
      </div>
    </div>
  );
}
