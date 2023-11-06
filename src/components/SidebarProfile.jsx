import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import EditProfile from "./EditProfile";
import { FiEdit } from "react-icons/fi";
import { useRef } from "react";
import { useEffect } from "react";

export default function SidebarProfile({ setMode }) {
  const fileEl = useRef();

  const onChangeImage = (e) => {
    // console.log(e.target.files[0]);
  };

  return (
    <div className="flex flex-col my-24 items-center relative  w-[300px]  border-t-2 border-r-2  h-full">
      <div
        onClick={() => {
          fileEl.current.click();
        }}
        className="flex justify-end absolute top-[-2.5rem] items-end cursor-pointer  "
      >
        <img
          src="https://media.discordapp.net/attachments/1169121185053818954/1169273113473732718/gintoki_icon.jpeg?ex=6554cd72&is=65425872&hm=df872f430bbe5c701a5d3efbcf3efe1209b4c0a074957ae49eddd890b59f0375&=&width=1170&height=1170"
          alt=""
          className="w-[80px] h-[80px] rounded-full"
        />
        <div className="bg-white w-8 h-8 rounded-full absolute flex items-center justify-center">
          {" "}
          <FiEdit />
        </div>
        <input
          type="file"
          className="hidden"
          ref={fileEl}
          onChange={onChangeImage}
        />
      </div>

      <div className="w-full h-full flex flex-col gap-4 bg-white pt-14">
        <div className="text-center">Gojo satoru</div>
        <div className="text-center flex flex-col h-full">
          <div
            onClick={() => setMode("EDIT")}
            className="flex items-center px-8 py-4 cursor-pointer hover:bg-green-900 hover:text-white gap-4 justify-center border-t-2 mt-8"
          >
            <div>ข้อมูลส่วนตัว</div>
            <AiOutlineRight />
          </div>
          <div
            onClick={() => setMode("SHOP")}
            className="flex items-center px-8 py-4 cursor-pointer hover:bg-green-900 hover:text-white gap-4 justify-center border-t-2 border-b-2"
          >
            <div>ร้านค้าของฉัน</div>
            <AiOutlineRight />
          </div>
        </div>
      </div>
    </div>
  );
}
