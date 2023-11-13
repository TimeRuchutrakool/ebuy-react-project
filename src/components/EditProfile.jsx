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
import Loading from "../components/Loading";

export default function EditProfile() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [editUser, setEditUser] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
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

  if (isLoading) {
    return <Loading />;
  }

  const handleSubmit = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      const result = {
        firstName: editUser?.firstName,
        lastName: editUser?.lastName,
        address: editUser?.address
          ? editUser.address + " " + val.subdistrict
          : user.address.address,
        province: val.province ? val.province : user.address.province,
        city: val.district ? val.district : user.address.district,
        postalcode: val.postalCode ? val.postalCode : user.address.postalCode,
      };
      const response = await editAddress(result);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const subdistrict = user.address.address.split(" ")[1];
  console.log(subdistrict);

  return (
    <div className=" mt-24 border-t w-full">
      <h1 className="p-4 pl-8 text-green-900 border-b shadow-md">
        ข้อมูลของฉัน
      </h1>
      <div className="flex flex-row  w-full">
        <form
          className="flex flex-col pl-8 gap-4 pt-8 w-[700px]"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-x-[161px] justify-between ">
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
          <div className="flex gap-x-[124px] justify-between ">
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
          <div className="flex  gap-x-[151px] items-start justify-between">
            <h1>ที่อยู่</h1>
            <div className="Address flex flex-col gap-4 ">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  value={editUser.address}
                  className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
                  placeholder={user.address.address}
                  onChange={(e) =>
                    setEditUser({ ...editUser, address: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ThailandAddressTypeahead
              value={val}
              onValueChange={(val) => {
                setVal(val);
              }}
            >
              <div className="flex  justify-between gap-x-[142px]">
                <h1>ตำบล</h1>
                <ThailandAddressTypeahead.SubdistrictInput
                  className="all-input border py-1.5 w-96 px-3 "
                  placeholder={subdistrict}
                />
              </div>
              <div className="flex justify-between gap-x-[139px]">
                <h1>อำเภอ</h1>
                <ThailandAddressTypeahead.DistrictInput
                  className="all-input border py-1.5 w-96 px-3"
                  placeholder={user.address.city}
                />
              </div>
              <div className="flex justify-between gap-x-[139pxx]">
                <h1>จังหวัด</h1>
                <ThailandAddressTypeahead.ProvinceInput
                  className="all-input border py-1.5 w-96 px-3"
                  placeholder={user.address.province}
                />
              </div>
              <div className="flex justify-between   ">
                <h1>postal code</h1>
                <ThailandAddressTypeahead.PostalCodeInput
                  className="all-input border py-1.5 w-96 px-3"
                  placeholder={user.address.postalcode}
                />
              </div>
              <div className="flex justify-center">
                <button className="bg-green-900 w-[120px] text-white px-4 py-1.5 rounded-md flex items-center justify-around">
                  <FaSave />
                  <p>บันทึก</p>
                </button>
              </div>
              <ThailandAddressTypeahead.Suggestion />
            </ThailandAddressTypeahead>
          </div>
          <div className="flex justify-center ml-5"></div>
        </form>
      </div>
    </div>
  );
}
