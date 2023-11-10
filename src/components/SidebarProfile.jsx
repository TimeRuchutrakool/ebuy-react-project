import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import EditProfile from "./EditProfile";
import { FiEdit } from "react-icons/fi";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { updateImageProfile } from "../services/apiAuth";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../store/slices/userSlice";
import Loading from "./Loading";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidStore } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";

export default function SidebarProfile({ setMode, mode }) {
  const [isLoading, setIsLoading] = useState(false);
  const fileEl = useRef();
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const upload = async (input) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("profileImage", input);
      await updateImageProfile(formData);
      dispatch(getMe());
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const onChangeImage = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files);
      upload(e.target.files[0]);
    }
  };
  console.log(user?.profileImage);
  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col my-24 relative w-[300px] border items-center">
      <div
        onClick={() => {
          fileEl.current.click();
        }}
        className="flex justify-end absolute top-[-2.5rem] items-end cursor-pointer  "
      >
        {user?.profileImage ? (
          <img
            src={user?.profileImage}
            alt=""
            className="w-[80px] h-[80px] rounded-full"
          />
        ) : (
          <div className="border border-[#E4E9EE] rounded-full p-2  w-[80px] h-[80px] flex items-center justify-center text-5xl bg-white">
            <BsFillPersonFill className="text-gray-500" />
          </div>
        )}

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
      <div className="w-full h-full flex flex-col bg-white shadow-sm">
        <div className="text-center p-12 border-b ">
          {user?.firstName} {user?.lastName}
        </div>
        <div
          onClick={() => setMode("SHOP")}
          className={`flex items-center p-4  cursor-pointer  rounded-lg opacity-70   gap-4 justify-center ${
            mode === "SHOP" ? " bg-green-900 text-white opacity-100" : ""
          }`}
        >
          <div>ร้านค้าของฉัน</div>
          <BiSolidStore />
        </div>
        <div className="">
          <div
            onClick={() => setMode("EDIT")}
            className={`flex items-center p-4 cursor-pointer  rounded-lg opacity-70  gap-4 justify-center ${
              mode === "EDIT" ? "bg-green-900 opacity-100 text-white " : ""
            }`}
          >
            <div>ข้อมูลส่วนตัว</div>
            <FaUserEdit />
          </div>
          <div
            onClick={() => setMode("WISHLIST")}
            className={`flex items-center p-4  cursor-pointer rounded-lg opacity-70  gap-4 justify-center ${
              mode === "WISHLIST" ? "bg-green-900 opacity-100 text-white" : ""
            }`}
          >
            <div>รายการโปรด</div>
            <AiFillHeart />
          </div>
          <div
            onClick={() => setMode("ORDERHISTORY")}
            className={`flex items-center p-4  cursor-pointer  rounded-lg opacity-70   gap-4 justify-center ${
              mode === "ORDERHISTORY"
                ? " bg-green-900 text-white opacity-100"
                : ""
            }`}
          >
            <div>ประวัติคำสั่งซื้อของฉัน</div>
            <BiSolidStore />
          </div>
          <div
            onClick={() => setMode("MYORDERS")}
            className={`flex items-center p-4  cursor-pointer  rounded-lg opacity-70   gap-4 justify-center ${
              mode === "MYORDERS" ? " bg-green-900 text-white opacity-100" : ""
            }`}
          >
            <div>ออเดอร์ของฉัน</div>
            <BiSolidStore />
          </div>
        </div>
      </div>
    </div>
  );
}
