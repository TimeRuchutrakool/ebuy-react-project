import { useSearchParams } from "react-router-dom";
import useModal from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import { FaPeopleCarry } from "react-icons/fa";
import { confirmReceipted } from '../../store/slices/orderSlice';
import { useState } from "react";


export default function ConfirmReceipt() {
    const { dispatch: modal } = useModal();
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [input,setInput]=useState({
    id:orderId,
    status:"SUCCESS"
  })
  const dispatch = useDispatch();

  const handdleConfirmReceipt = async () => {
    console.log("click")
    setInput({...input})
    dispatch(confirmReceipted(input))
    searchParams.delete("orderId");
    modal({ type: "close" });
    setSearchParams(searchParams);
   
  };
  return (
    <div className="w-container m-8 p-8 py-5 ">
      <h1 className=" flex items-center justify-center text-4xl  p-4">
        คุณแน่ใจหรือไม่?
      </h1>
      <p className=" flex items-center justify-center text-lg text-gray-400 m-2 p-4">
        คุณได้รับสินค้าเเล้ว?
      </p>
      <div className="flex items-center justify-center ">
        {/* <GoInfo className="text-9xl text-yellow-300 " /> */}
        <FaPeopleCarry className="text-9xl text-yellow-300 "/>
      </div>

      <div className="flex items-center justify-evenly px-10 py-16">
        <div
          className=" flex justify-center p-2 w-36  bg-gray-500 text-white rounded-md cursor-pointer border-gray-400 hover:bg-gray-700 "
          onClick={() => modal({ type: "close" })}
        >
          ยกเลิก
        </div>
        <div
          className="flex justify-center p-2 w-36  text-white bg-red-500 rounded-md  cursor-pointer hover:bg-red-700 "
          onClick={handdleConfirmReceipt}
        >
          ใช่ 
        </div>
      </div>
    </div>
  )
}
