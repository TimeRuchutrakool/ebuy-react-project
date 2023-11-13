import React from "react";

export default function Orderhistory() {
  return (
    <div className=" w-full m-8 p-4">
      <h1 className=" text-2xl py-6 text-green-700">
        ประวัติการสั่งซื้อของฉัน
      </h1>
      <div className=" grid gap-96 grid-cols-2 items-center justify-start  p-8 border  rounded-md">
        <div className="flex items-center justify-center gap-4 p-2 ">
          <img
            className="w-36 h-24 flex items-center justify-start "
            src="https://plus.unsplash.com/premium_photo-1682096353438-03b20899f011?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
          <div className="grid gap-4 grid-cols-2">
            <br></br>
            <div className="text-xl ">เสื้อยืด oversize </div>
            <br></br>
            <div className="text-gray-400">ตัวเลือกสินค้า สีขาว</div>
            <br></br>
            <div className=""> x 1</div>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="">
            <h1 className="text-green-500  text-xl py-2 ">
              สินค้าถูกจัดส่งแล้ว
            </h1>
            <br></br>
            <span className=" text-gray-400 px-2">03-11-2023</span>
            <span className=" text-gray-400 px-2">15:36</span>
            <br></br>
            <p className=" flex items-center justify-center text-orange-500 font-medium text-2xl">
              290 บาท
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
