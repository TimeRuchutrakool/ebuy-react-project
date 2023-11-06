import { HiCheckCircle } from "react-icons/hi";

export default function BidReview() {
  return (
    <div className=" w-full max-w-screen-full bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700   ">
      <div className="   px-2 m-8 ">
        <div className="py-2 font-semibold text-2xl  mt-8">place your bid</div>
        <div className="py-2">(ประมาณ THB 540 + 150 shipping)</div>
        <div className="py-2 text-gray-500">(1 bid 1 :00:00 left)</div>
        <div className="flex items-center  ">
          <HiCheckCircle className="text-green-600 m-1" />
          <div>your current bid puts your in the lead.</div>
        </div>
        <div className=" flex py-3">Your max bid : 541THB </div>
        <div className="flex space-x-2 py-2  items-center justify-center">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full  rounded-xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="0.00"
          />

          <div className="bg-green-700  cursor-pointer  text-white rounded-full px-3 py-2 font-medium flex items-center justify-center w-96  ">
            Review bid
          </div>
        </div>
        <small>Enter 542 THB or more </small>
      </div>
    </div>
  );
}
