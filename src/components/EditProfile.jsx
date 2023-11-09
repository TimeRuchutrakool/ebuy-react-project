import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  ThailandAddressTypeahead,
  ThailandAddressValue,
} from "react-thailand-address-typeahead";

export default function EditProfile() {
  const { user } = useSelector((store) => store.user);
  console.log(user);

  const [editUser, setEditUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    address: user.address.address,
    city: user.address.city,
  });

  const [val, setVal] = useState(
    ThailandAddressValue.fromDatasourceItem({
      s: "",
      d: "",
      p: "",
      po: "",
    })
  );
  const handleSubmit = () => {
    const result = {
      firstName: editUser.firstName,
      lastName: editUser.lastName,
      address: editUser.address + val.s + val.d,
      province: val.p,
      city: val.p,
      postalcode: val.po,
    };
  };

  return (
    <div className=" mt-24 border-t-2 w-full ">
      <h1 className="pl-8 py-4 text-2xl text-green-900 border-b-2">
        ข้อมูลของฉัน
      </h1>
      <div className="flex flex-row  w-full">
        <form
          className="flex flex-col w-full pl-8 gap-10 pt-8"
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
            <div className="Address flex flex-col gap-10 ">
              <div className="">
                <input
                  type="text"
                  name=""
                  id=""
                  value={editUser.address}
                  className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
                  placeholder={user?.address.address}
                  onChange={(e) =>
                    setEditUser({ ...editUser, address: e.target.value })
                  }
                />
              </div>

              <ThailandAddressTypeahead
                value={val}
                onValueChange={(val) => setVal(val)}
              >
                <ThailandAddressTypeahead.DistrictInput
                  className="all-input border py-1.5 w-96"
                  placeholder={user?.address.city}
                />
                <ThailandAddressTypeahead.ProvinceInput
                  className="all-input border py-1.5 w-96"
                  placeholder={user?.address.province}
                />
                <ThailandAddressTypeahead.PostalCodeInput
                  className="all-input border py-1.5 w-96"
                  placeholder={user?.address.postalcode}
                />
                <ThailandAddressTypeahead.Suggestion />
              </ThailandAddressTypeahead>
            </div>
          </div>
          <div className="flex gap-x-[180px] ">
            <p></p>
            <button className="bg-green-900 w-[120px] text-white px-4 py-1.5 rounded-md">
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
