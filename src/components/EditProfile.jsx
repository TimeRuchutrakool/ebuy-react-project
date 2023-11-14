import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onChangeUser, onChangeAddress } from "../store/slices/userSlice";
import { editAddress, handleEditUser } from "../store/slices/userSlice";

export default function EditProfile() {
  const { user, address, editUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <div className=" mt-24 border-t w-full ">
      <h1 className="p-4 pl-8 text-green-900 border-b shadow-md">
        ชื่อ-นามสกุล
      </h1>
      <div className="flex flex-col  w-full">
        <form className="flex flex-col pl-8 gap-4 py-8 w-[700px]">
          <div className="flex gap-x-[161px] justify-between ">
            <h1>ชื่อ</h1>
            <input
              type="text"
              className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
              placeholder=""
              value={editUser.firstName}
              name="firstName"
              onChange={(e) =>
                dispatch(
                  onChangeUser({ name: e.target.name, value: e.target.value })
                )
              }
            />
          </div>
          <div className="flex gap-x-[124px] justify-between ">
            <h1>นามสกุล</h1>
            <input
              type="text"
              className="border border-gray-300 rounded-sm px-2 py-1.5 w-96"
              value={editUser.lastName}
              name="lastName"
              onChange={(e) =>
                dispatch(
                  onChangeUser({ name: e.target.name, value: e.target.value })
                )
              }
            />
          </div>
          <div className="flex justify-center mr-[13px]">
            <button
              className="bg-green-900 text-white px-6 py-1.5 rounded-md  "
              onClick={(e) => {
                e.preventDefault();
                dispatch(
                  handleEditUser({
                    firstName: editUser.firstName,
                    lastName: editUser.lastName,
                  })
                );
              }}
            >
              บันทึก
            </button>
          </div>
        </form>
        <h1 className="p-4 pl-8 text-green-900 border-b border-t shadow-md">
          แก้ไขที่อยู่
        </h1>
        <form className="flex flex-col pl-8 gap-4 py-8 w-[700px]">
          <div className="flex  gap-x-[151px] items-start justify-between">
            <h1>ที่อยู่</h1>
            <div className="Address flex flex-col gap-4 ">
              <div className="">
                <input
                  type="text"
                  className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
                  placeholder=""
                  value={address.address}
                  name="address"
                  onChange={(e) =>
                    dispatch(
                      onChangeAddress({
                        name: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex  gap-x-[151px] items-start justify-between">
            <h1>อำเภอ/เขต</h1>
            <div className="Address flex flex-col gap-4 ">
              <div className="">
                <input
                  type="text"
                  className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
                  placeholder=""
                  value={address.city}
                  name="city"
                  onChange={(e) =>
                    dispatch(
                      onChangeAddress({
                        name: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex  gap-x-[151px] items-start justify-between">
            <h1>จังหวัด</h1>
            <div className="Address flex flex-col gap-4 ">
              <div className="">
                <input
                  type="text"
                  className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
                  placeholder=""
                  value={address.province}
                  name="province"
                  onChange={(e) =>
                    dispatch(
                      onChangeAddress({
                        name: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex  gap-x-[151px] items-start justify-between">
            <h1>postCode</h1>
            <div className="Address flex flex-col gap-4 ">
              <div className="">
                <input
                  type="text"
                  value={address.postalcode}
                  className="border border-gray-300 rounded-sm px-2 py-1.5 w-96 "
                  name="postalcode"
                  onChange={(e) =>
                    dispatch(
                      onChangeAddress({
                        name: e.target.name,
                        value: e.target.value,
                      })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mr-[13px]">
            <button
              className="bg-green-900 text-white px-6 py-1.5 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                dispatch(editAddress(address));
              }}
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
