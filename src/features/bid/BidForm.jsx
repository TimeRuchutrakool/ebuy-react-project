import { useState } from "react";
import Heading from "../../components/Heading";
import useModal from "../../hooks/useModal";
import { useSearchParams } from "react-router-dom";

export default function BidForm() {
  const { dispatch: modal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const [confirmBid, setConfirmBid] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  return (
    <div className="w-[50vw] p-5 flex flex-col gap-5 font-light">
      <div className="flex justify-between">
        <Heading>กำลังประมูล</Heading>
        <div className="flex flex-col items-end gap-2">
          <p className="text-xs text-gray-400">
            หากราคาประมูลของคุณสูงสุด จะไม่สามารถออกได้
          </p>
          <button
            className="text-xs bg-red-600 p-2 text-white rounded-lg"
            onClick={() => {
              if (searchParams.has("biding")) {
                searchParams.delete("biding");
                setSearchParams(searchParams);
              }
              modal({ type: "close" });
            }}
          >
            ออกจากการประมูล
          </button>
        </div>
      </div>
      <div className="flex gap-5">
        <img
          src="https://www.billboard.com/wp-content/uploads/2023/10/Jennie-Kim-cannes-2023-a-billboard-1548.jpg"
          alt="product-image"
          className="w-28 aspect-square object-cover rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <Heading>Metallica 90s T-shirt</Heading>
          <p className="text-xs text-gray-400">
            เสื้อ Metallica งานใหม่ แต่ detail ระเอียด ตะเข็บเดี่ยว
            เหมาะสำหรับคนที่ชื่นชอบเสื้อวง ส่วนใครไม่ชอบก็เรื่องของมึง
            รีบในซื้อด่วน ภายในเวลาจำกัด
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <p>ราคาประมูลสูงสุดปัจจุบัน</p>
          <p className="text-red-600 font-medium text-xl">฿ 3600</p>
        </div>
        <p className="text-red-600 text-xl">เหลือเวลาอีก 00 : 10 : 12</p>
      </div>

      <hr />
      {confirmBid ? (
        <BidConfirmBox
          setConfirmBid={setConfirmBid}
          bidAmount={bidAmount}
          setBidAmount={setBidAmount}
        />
      ) : (
        <BidBox
          setConfirmBid={setConfirmBid}
          bidAmount={bidAmount}
          setBidAmount={setBidAmount}
        />
      )}
    </div>
  );
}

function BidBox({ setConfirmBid, bidAmount, setBidAmount }) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex gap-4">
        <input
          type="text"
          name="price"
          id="price"
          className="rounded-xl border py-1.5 px-3 placeholder:text-gray-400 "
          placeholder="0.00"
          onChange={(e) => setBidAmount(e.target.value)}
          value={bidAmount}
        />
        <button
          className="bg-green-700 cursor-pointer text-white rounded-full px-3 py-2 font-medium flex items-center justify-center w-fit"
          onClick={() => {
            if (bidAmount) {
              setConfirmBid(true);
            }
          }}
        >
          วางเงินประมูล
        </button>
      </div>
    </div>
  );
}

function BidConfirmBox({ setConfirmBid, bidAmount, setBidAmount }) {
  return (
    <div className=" flex flex-col gap-5">
      <Heading>กรุณาตรวจสอบข้อมูลก่อนยืนยัน</Heading>
      <div className="flex justify-between">
        <p>ผู้ประมูล</p>
        <p>Time Ruchutrakool</p>
      </div>
      <div className="flex justify-between">
        <p>ราคาวางประมูล</p>
        <p>{bidAmount} ฿</p>
      </div>
      <div className="flex justify-between">
        <button
          className="text-xs bg-red-600 py-2 px-3 text-white rounded-lg"
          onClick={() => {
            setBidAmount("");
            setConfirmBid(false);
          }}
        >
          กลับไป
        </button>
        <button
          className="text-xs bg-green-500 py-2 px-3 text-white rounded-lg"
          onClick={() => {
            setBidAmount("");
            setConfirmBid(false);
          }}
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );
}
