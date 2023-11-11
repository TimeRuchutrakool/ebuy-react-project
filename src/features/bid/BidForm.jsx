import { useState } from "react";
import Heading from "../../components/Heading";
import useModal from "../../hooks/useModal";
import { useSearchParams } from "react-router-dom";
import { useBid } from "./useBid";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BidForm() {
  const [confirmBid, setConfirmBid] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [bidProduct, setBidProduct] = useState({});
  const { bidSocket } = useBid();
  const { dispatch: modal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const [latestBid, setLatestBid] = useState(0);
  const { productId } = useParams();

  useEffect(() => {
    bidSocket.emit('joinBidingProduct', { bidProductId: productId });
    bidSocket.on("receivedProductData", (data) => {
      setBidProduct(data);
      setLatestBid(data.price);
    });
  }, [bidSocket, productId]);

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
          src={bidProduct?.imageUrl}
          alt="product-image"
          className="w-28 aspect-square object-cover rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <Heading>{bidProduct?.name}</Heading>
          <p className="text-xs text-gray-400">{bidProduct?.description}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <p>ราคาประมูลสูงสุดปัจจุบัน</p>
          <p className="text-red-600 font-medium text-xl">฿ {latestBid}</p>
        </div>

        <Timer timeRemainings={bidProduct?.timeRemainings} />
      </div>

      <hr />
      {confirmBid ? (
        <BidConfirmBox
          setConfirmBid={setConfirmBid}
          bidAmount={bidAmount}
          setBidAmount={setBidAmount}
          bidSocket={bidSocket}
        />
      ) : (
        <BidBox
          setConfirmBid={setConfirmBid}
          bidAmount={bidAmount}
          latestBid={latestBid}
          setBidAmount={setBidAmount}
        />
      )}
    </div>
  );
}

function BidBox({ setConfirmBid, bidAmount, setBidAmount, latestBid }) {
  return (
    <div className="flex flex-col items-end">
      <div className="flex gap-4 items-center">
        {bidAmount && latestBid >= bidAmount && (
          <p className="text-sm text-red-600">* เกทับหน่อยเด่ะ *</p>
        )}
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
            if (bidAmount && latestBid < bidAmount) {
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

function BidConfirmBox({ setConfirmBid, bidAmount, setBidAmount, bidSocket }) {
  const { productId } = useParams();
  const { user } = useSelector((store) => store.user);
  return (
    <div className=" flex flex-col gap-5">
      <Heading>กรุณาตรวจสอบข้อมูลก่อนยืนยัน</Heading>
      <div className="flex justify-between">
        <p>ผู้ประมูล</p>
        <p>
          {user.firstName} {user.lastName}
        </p>
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
            bidSocket.emit("bidRequest", {
              roomId: +productId,
              bidAmount: +bidAmount,
              userId: +user.id,
            });
          }}
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );
}

function Timer({ timeRemainings }) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTime((timeRemainings / 1000).toFixed(0));
  }, [timeRemainings]);

  useEffect(() => {
    let interval = null;
    if (time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [time]);

  if (time <= 0) return <p>การประมูลสิ้นสุด</p>;

  return (
    <div className="text-red-600 text-xl flex gap-3">
      <span>เหลือเวลาอีก</span>
      <p>
        {Math.floor(time / 3600)
          .toString()
          .padStart(2, "0")}{" "}
        :{" "}
        {Math.floor((time / 60) % 60)
          .toString()
          .padStart(2, "0")}{" "}
        : {(time % 60).toString().padStart(2, "0")}
      </p>
    </div>
  );
}
