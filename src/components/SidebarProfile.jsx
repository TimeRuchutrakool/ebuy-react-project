import { AiOutlineRight } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { useRef } from "react";
import { useState } from "react";
import { updateImageProfile } from "../services/apiAuth";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../store/slices/userSlice";
import Loading from "./Loading";

export default function SidebarProfile({ setMode }) {
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

  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col my-24 items-center relative  w-[300px]  border-t-2 border-r-2   h-full bg-green-200">
      <div
        onClick={() => {
          fileEl.current.click();
        }}
        className="flex justify-end absolute top-[-2.5rem] items-end cursor-pointer  "
      >
        <img
          src={user?.profileImage}
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
        <div className="text-center">
          {user?.firstName} {user?.lastName}
        </div>
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
