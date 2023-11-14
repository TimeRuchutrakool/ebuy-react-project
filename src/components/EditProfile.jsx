import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSave } from "react-icons/fa";
import {
  ThailandAddressTypeahead,
  ThailandAddressValue,
} from "react-thailand-address-typeahead";
import { editAddress } from "../services/apiUser";
import { getMe } from "../store/slices/userSlice";
import { useEffect } from "react";
import axios from "../config/axios";

export default function EditProfile() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(user);
  const [editUser, setEditUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    address: "",
  });
  console.log(editUser);
  const [val, setVal] = useState(
    ThailandAddressValue.fromDatasourceItem({
      s: "",
      d: "",
      p: "",
      po: "",
    })
  );
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = {
      firstName: editUser.firstName,
      lastName: editUser.lastName,
      address: editUser.address + " " + val.subdistrict,
      province: val.province,
      city: val.district,
      postalcode: val.postalCode,
    };
    console.log(result);
    const response = await editAddress(result);
    // dispatch(getMe());
    console.log(response);
  };
  const subdistrict = user.address?.address?.split(" ")[1];
  console.log(subdistrict);

  return (
    <div className=" mt-24 border-t w-full">
      <h1 className="p-4 pl-8 text-green-900 border-b shadow-md">
        ข้อมูลของฉัน
      </h1>
      <div className="flex flex-row  w-full">
        <form
          className="flex flex-col w-full pl-8 gap-4 pt-8"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-x-[160px] ">
            <h1>ชื่อ</h1>
            <input
              type="text"
              name=""
              id=""
              value={editUser.firstName}
              className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
              placeholder={user?.firstName}
              onChange={(e) =>
                setEditUser({ ...editUser, firstName: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-x-[124px] ">
            <h1>นามสกุล</h1>
            <input
              type="text"
              name=""
              id=""
              value={editUser.lastName}
              className="border border-gray-300 rounded-sm px-2 py-1.5 w-96"
              placeholder={user?.lastName}
              onChange={(e) =>
                setEditUser({ ...editUser, lastName: e.target.value })
              }
            />
          </div>
          <div className="flex  gap-x-[151px] items-start ">
            <h1>ที่อยู่</h1>
            <div className="Address flex flex-col gap-4 ">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  value={editUser.address}
                  className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
                  placeholder="บ้านเลขที่ ซอย"
                  onChange={(e) =>
                    setEditUser({ ...editUser, address: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="">
            <ThailandAddressTypeahead
              value={val}
              onValueChange={(val) => {
                setVal(val);
              }}
            >
              <div className="flex items-center justify-start gap-x-[142px]">
                <h1>ตำบล</h1>
                <ThailandAddressTypeahead.SubdistrictInput
                  className="all-input border py-1.5 w-96 px-3 "
                  placeholder={subdistrict}
                />
              </div>
              <div className="flex items-center justify-start gap-x-[139px]">
                <h1>อำเภอ</h1>
                <ThailandAddressTypeahead.DistrictInput
                  className="all-input border py-1.5 w-96 px-3"
                  placeholder={user.address.city}
                />
              </div>
              <div className="flex items-center justify-start gap-x-[139pxx]">
                <h1>จังหวัด</h1>
                <ThailandAddressTypeahead.ProvinceInput
                  className="all-input border py-1.5 w-96 px-3"
                  placeholder={user.address.province}
                />
              </div>
              <div>
                <h1>postal code</h1>
                <ThailandAddressTypeahead.PostalCodeInput
                  className="all-input border py-1.5 w-96 px-3"
                  placeholder={user.address.postalcode}
                />
              </div>
              <ThailandAddressTypeahead.Suggestion />
            </ThailandAddressTypeahead>
          </div>
          <div className="flex gap-x-[180px] ">
            <p></p>
            <button className="bg-green-900 w-[120px] text-white px-4 py-1.5 rounded-md flex items-center justify-around">
              <FaSave />
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
