import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHistory } from "../store/slices/orderSlice";
import Loading from "./Loading";

export default function Orderhistory() {
  const { history ,loading} = useSelector((store) => store.myOrder);
  const dispatch = useDispatch();
  console.log(">>>>>", history);
  useEffect(() => {
    dispatch(getHistory());
  }, []);
  if(loading) return <Loading/>
  return (
    <div className=" w-full m-8 p-4 mt-24">
      <h1 className=" text-2xl py-6 text-green-700">
        ประวัติการสั่งซื้อของฉัน
      </h1>
      {history.map((el) => (
        <div className=" grid gap-96 grid-cols-2 items-center justify-start  p-8 border  rounded-md">
          <div className="flex items-center justify-center gap-4 p-2 ">
            <div className=" flex flex-col gap-4">
              <p>หมายเลขออเดอร์ {el.id}</p>
              <img
                className="w-36 h-24 flex items-center justify-start object-cover "
                src={el.imageUrl}
                alt=""
              />
            </div>
            <div className="grid gap-4 grid-cols-2">
              <br></br>
              <div className="text-xl ">{el.name}</div>
              <br></br>
              <div className="">จำนวน : {el.among}</div>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <div className="">
              <h1 className="text-green-500  text-xl py-2 ">
                สินค้าถูกจัดส่งแล้ว
              </h1>
              <br></br>
              <span className=" text-gray-400 px-2">
                {el.time?.split(" ")[0]}
              </span>
              <span className=" text-gray-400 px-2">
                {el.time?.split(" ")[1]}
              </span>
              <br></br>
              <p className=" flex items-center justify-center text-orange-500 font-medium text-2xl">
                {el.price} บาท
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
