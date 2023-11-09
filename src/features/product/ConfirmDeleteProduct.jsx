import { GoInfo } from "react-icons/go";
import React from "react";

function ConfirmDeleteProduct() {
  return (
    <div className="w-container m-8 p-8 py-5 ">
      <h1 className=" flex items-center justify-center text-4xl  p-4">
        คุณแน่ใจหรือไม่?
      </h1>
      <p className=" flex items-center justify-center text-lg text-gray-400 m-2 p-4">
        กรุณายืนยันที่จะลบรายการนี้
      </p>
      <div className="flex items-center justify-center ">
        <GoInfo className="text-9xl text-yellow-300 " />
      </div>

      <div className="flex items-center justify-evenly px-10 py-16">
        <div className=" flex justify-center p-2 w-36  border-solid border-2 rounded-md cursor-pointer border-gray-400 hover:bg-gray-100 ">
          ยกเลิก
        </div>
        <div
          className="flex justify-center p-2 w-36  text-white bg-red-500 rounded-md  cursor-pointer hover:bg-red-700 "
          onClick={handdleDeleteProduct}
        >
          ใช่ ลบเลย
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteProduct;
