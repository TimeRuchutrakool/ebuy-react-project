import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function EditProfile() {
  const { user } = useSelector((store) => store.user);
  const [editUser, setEditUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  console.log(user);
  return (
    <div className="w-full mt-24 border-t-2 border-b-2 ">
      <form className="flex flex-row mx-10 my-10 gap-16 w-full">
        <div className="flex flex-col gap-8">
          <h1 className="py-1.5">ชื่อ</h1>
          <h1 className="py-1.5">นามสกุล</h1>
          <h1 className="py-1.5">ที่อยู่</h1>
        </div>
        <form className="flex flex-col gap-8  w-[800px] ">
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-300 rounded-sm px-2 py-1.5 "
            placeholder={user?.firstName}
            onChange={(e) =>
              setEditUser({ ...editUser, firstName: e.target.value })
            }
          />
          <input
            type="text"
            name=""
            id=""
            className="border border-gray-300 rounded-sm px-2 py-1.5"
            placeholder={user?.lastName}
            onChange={(e) =>
              setEditUser({ ...editUser, lastName: e.target.value })
            }
          />
          <textarea
            name=""
            cols="30"
            rows="5"
            className="border border-gray-300 rounded-sm px-2 py-1.5"
            placeholder={user?.address}
            onChange={(e) =>
              setEditUser({ ...editUser, address: e.target.value })
            }
          ></textarea>
          <button className="bg-green-900 w-[120px] text-white px-4 py-1.5 rounded-md">
            บันทึก
          </button>
        </form>
      </form>
    </div>
  );
}
