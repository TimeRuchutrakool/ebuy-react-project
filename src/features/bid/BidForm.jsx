import { useState } from "react";
import Heading from "../../components/Heading";
import useModal from "../../hooks/useModal";
import { useSearchParams } from "react-router-dom";
import { useBid } from "./useBid";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FcOk } from "react-icons/fc";

export default function BidForm() {
  const [confirmBid, setConfirmBid] = useState(false);
  const [bidAmount, setBidAmount] = useState("");
  const [bidProduct, setBidProduct] = useState({});
  const { bidSocket } = useBid();
  const { dispatch: modal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const [latestBid, setLatestBid] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    bidSocket.emit("joinBidingProduct", { bidProductId: productId });
    bidSocket.on(`getBiding/${productId}`, (data) => {
      setBidProduct(() => data);
      setLatestBid({
        latestWinnerId: data.latestBid.latestWinnerId,
        latestBidPrice: data.latestBid.latestBidPrice,
      });
    });
    bidSocket.on(`responseBid/${productId}`, (data) => setLatestBid(data));
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
          <p className="text-red-600 font-medium text-xl">
            ฿ {latestBid.latestBidPrice}
          </p>
        </div>

        <Timer timeRemainings={bidProduct?.timeRemainings} />
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
          latestBid={latestBid}
          setBidAmount={setBidAmount}
        />
      )}
    </div>
  );
}

function BidBox({ setConfirmBid, bidAmount, setBidAmount, latestBid }) {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="flex items-center justify-between">
      {latestBid.latestWinnerId === user.id ? (
        <div className="text-lg flex items-center gap-5 text-green-600">
          <FcOk />

          <p>ยินดีด้วย ราคาประมูลของคุณอยู่ในอันดับสูงสุด</p>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex gap-4 items-center">
        {bidAmount && latestBid.latestBidPrice >= +bidAmount && (
          <p className="text-sm text-red-600">* เกทับหน่อยเด่ะ *</p>
        )}
        <input
          type="number"
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
            if (latestBid.latestBidPrice < bidAmount) setConfirmBid(true);
          }}
        >
          วางเงินประมูล
        </button>
      </div>
    </div>
  );
}

function BidConfirmBox({ setConfirmBid, bidAmount, setBidAmount }) {
  const { productId } = useParams();
  const { user } = useSelector((store) => store.user);
  const { bidSocket } = useBid();
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
              bidProductId: +productId,
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
  const { productId } = useParams();
  const [time, setTime] = useState(undefined);
  const { bidSocket } = useBid();
  const { user } = useSelector((store) => store.user);
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch: modal } = useModal();
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

  useEffect(() => {
    if (time <= 0) {
      bidSocket.emit(
        "bidingFinished",
        { bidProductId: +productId },
        ({ latestWinnerId, latestBidPrice, winnerName, product }) => {
          if (user.id == latestWinnerId) {
            console.log(latestBidPrice, winnerName);
            modal({
              type: "bidPay",
              payload: {
                latestWinnerId,
                latestBidPrice,
                winnerName: user.firstName + " " + user.lastName,
                productId,
                product,
              },
            });
          } else {
            modal({ type: "bidFailed" });
          }
        }
      );
    }
  }, [
    time,
    bidSocket,
    productId,
    modal,
    searchParams,
    setSearchParams,
    user.id,
    user.firstName,
    user.lastName,
  ]);

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
