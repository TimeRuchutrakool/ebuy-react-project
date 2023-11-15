import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myOrder } from "../services/apiUser";
import { getMyOrder } from "../store/slices/orderSlice";
import MeOrder from "./MeOrder";
import Loading from "./Loading";
import { getMySale } from "../store/slices/saleSlice";
import MeSale from "./MeSale";

export default function MyOrders() {
  const [isClick, setIsClick] = useState(false);
  const [mode, setMode] = useState("MYORDER");
  const { order, loading } = useSelector((store) => store.myOrder);
  const { mySale } = useSelector((store) => store.mySale);
  const dispatch = useDispatch();
  console.log("order =>", order);
  console.log("myslae =>", mySale);
  useEffect(() => {
    dispatch(getMyOrder());
    dispatch(getMySale());
    // myOrder().then(res => console.log(res)).catch( err => console.log(err))
  }, []);
  if (loading) return <Loading />;
  return (
    <div className=" flex flex-col w-5/6">
      <div className="flex flex-row mt-24 border-t border-b shadow-md">
        <div
          className={
            isClick
              ? `w-1/2 h-10 flex justify-center items-center text-[#1E4C2F]
         bg-gray-100  hover:bg-[#1E4C2F] hover:text-white  cursor-pointer `
              : `w-1/2 h-10 flex justify-center items-center bg-[#1E4C2F] text-white `
          }
          onClick={() => {
            setIsClick(false);
            setMode("MYORDER");
          }}
        >
          <h1>MY ORDER</h1>
        </div>
        <div
          className={
            isClick
              ? `w-1/2 h-10 flex justify-center items-center bg-[#1E4C2F] text-white `
              : `w-1/2 h-10 flex justify-center text-[#1E4C2F]
         items-center bg-gray-100  hover:bg-[#1E4C2F] hover:text-white cursor-pointer `
          }
          onClick={() => {
            setIsClick(true);
            setMode("MYSALE");
          }}
        >
          <h1>MY SALE</h1>
        </div>
      </div>
      <div className="">
        {mode === "MYORDER" ? (
          <div>
            <h1 className="p-8  text-2xl text-center text-green-900 border-b ">
              คำสั่งซื้อของฉัน
            </h1>
            <div className="">
              {order?.map((el) => (
                <MeOrder
                  id={el.id}
                  among={el.among}
                  name={el.name}
                  trackNum={el.trackNum}
                  logisticsName={el.logisticsName}
                  price={el.price}
                  sellerFirstName={el.sellerFirstName}
                  sellerLastName={el.sellerLastName}
                  imageUrl={el.imageUrl}
                />
              ))}
            </div>
          </div>
        ) : (
          ""
        )}

        {mode === "MYSALE" ? (
          <div>
            <h1 className="text-2xl text-center p-8 text-green-900">
              การขายของฉัน
            </h1>

            {mySale?.map((el) => (
              <MeSale
                id={el.id}
                among={el.among}
                name={el.name}
                trackNum={el.trackNum}
                logisticsName={el.logisticsName}
                imageUrl={el.imageUrl}
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
