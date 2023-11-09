import Heading from "../../components/Heading";
import useModal from "../../hooks/useModal";

export default function BidForm() {
  const { dispatch: modal } = useModal();
  return (
    <div className="p-5 flex flex-col gap-3 font-light">
      <div className="flex justify-between">
        <Heading>กำลังประมูล</Heading>
        <p className="text-xs">
          ไม่สามารถออกจากการประมูลได้จนกว่าการประมูลจะเสร็จ
        </p>
      </div>
      <div className="flex justify-between">
        <Heading>Metallica 90s T-shirt</Heading>
        <p className="text-red-600 text-xl">เหลือเวลาอีก 00 : 10 : 12</p>
      </div>

      <div className="flex gap-5 items-center">
        <p>ราคาประมูลสูงสุดปัจจุบัน</p>
        <p className="text-red-600 font-medium text-xl">฿ 3600</p>
      </div>

      <label
        htmlFor="price"
        className="flex text-sm items-end  font-medium text-green-700 dark:text-green-500 "
      >
        ใส่จำนวนเงินที่ต้องจะประมูล
      </label>
      <div className="flex gap-4">
        <input
          type="text"
          name="price"
          id="price"
          className="w-full  rounded-xl border py-1.5 px-3 placeholder:text-gray-400 "
          placeholder="0.00"
        />
        <div
          className="bg-green-700   cursor-pointer  text-white rounded-full px-3 py-2 font-medium flex items-center justify-center w-96 "
          onClick={() => {
            modal({ type: "bidConfirm" });
          }}
        >
          Confirm bid
        </div>
      </div>
    </div>
  );
}
