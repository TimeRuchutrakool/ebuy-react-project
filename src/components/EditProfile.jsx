import React from "react";

export default function EditProfile() {
  return (
    <div className="w-full mt-24 border-t-2 border-b-2 ">
      <form className="flex flex-row mx-10 my-10 gap-16 w-full">
        <div className="flex flex-col gap-8">
          <h1 className="py-1.5">ชื่อ</h1>
          <h1 className="py-1.5">นามสกุล</h1>
          <h1 className="py-1.5">ที่อยู่</h1>
        </div>
        <div className="flex flex-col gap-8  w-[800px] ">
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-300 rounded-sm px-2 py-1.5 "
            placeholder="xxxxxxxx"
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-300 rounded-sm px-2 py-1.5"
            placeholder="xxxxxxxx"
          />
          <textarea
            name=""
            cols="30"
            rows="5"
            className="border border-gray-300 rounded-sm px-2 py-1.5"
            placeholder="xxxxxxxx"
          ></textarea>
          <button className="bg-green-900 w-[120px] text-white px-4 py-1.5 rounded-md">
            บันทึก
          </button>
        </div>
      </form>
    </div>
  );
}
