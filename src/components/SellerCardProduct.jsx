import React, { useState } from "react";

export default function CardProduct({ name, price, imageUrl, des }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white w-56 h-[340px] m-2 shadow-lg overflow-hidden rounded-md  ">
        <div className="w-[224px] h-[224px] ">
          <img src={imageUrl} alt="" className="object-cover w-full h-full" />
        </div>
        <div>
          <div className="p-3">
            <div className="flex justify-between">
              <h1>{name}</h1>
              <h1 className="text-green-600">{price}</h1>
            </div>
            <p>{des}</p>
          </div>
          <div className="flex justify-evenly p-3 gap-2 h-full ">
            <button className="bg-gray-300 w-full rounded-md">แก้ไข</button>
            <button className="bg-red-600 text-white w-full rounded-md">
              ลบ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
