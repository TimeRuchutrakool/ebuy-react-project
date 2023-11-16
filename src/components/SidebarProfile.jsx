import { FiEdit } from "react-icons/fi";
import { useRef } from "react";
import { updateImageProfile } from "../services/apiAuth";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../store/slices/userSlice";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidStore } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TbReportSearch } from "react-icons/tb";
import { GoTag } from "react-icons/go";

export default function SidebarProfile({ mode, setIsLoading }) {
  const fileEl = useRef();
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      upload(e.target.files[0]);
    }
  };

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
            alt="image"
            className="w-[80px] h-[80px] rounded-full object-cover"
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
          onClick={() => navigate("/user/SHOP")}
          className={`flex items-center p-4  cursor-pointer  rounded-lg    gap-4 justify-center ${
            mode === "SHOP" ? " bg-green-900 text-white opacity-100 " : ""
          }`}
        >
          <div>ร้านค้าของฉัน</div>
          <BiSolidStore />
        </div>
        <div>
          <div
            onClick={() => navigate("/user/EDIT")}
            className={`flex items-center p-4 cursor-pointer  rounded-lg   gap-4 justify-center ${
              mode === "EDIT" ? "bg-green-900 opacity-100 text-white " : ""
            }`}
          >
            <div>ข้อมูลส่วนตัว</div>
            <FaUserEdit />
          </div>
          <div
            onClick={() => navigate("/user/WISHLIST")}
            className={`flex items-center p-4  cursor-pointer rounded-lg  gap-4 justify-center  ${
              mode === "WISHLIST" ? "bg-green-900 opacity-100 text-white " : ""
            }`}
          >
            <div>รายการโปรด</div>
            <AiFillHeart />
          </div>
          <div
            onClick={() => navigate("/user/ORDERHISTORY")}
            className={`flex items-center p-4  cursor-pointer  rounded-lg    gap-4 justify-center  ${
              mode === "ORDERHISTORY"
                ? " bg-green-900 text-white opacity-100 "
                : ""
            }`}
          >
            <div>ประวัติคำสั่งซื้อของฉัน</div>
            <TbReportSearch />
          </div>
          <div
            onClick={() => navigate("/user/MYORDERS")}
            className={`flex items-center p-4  cursor-pointer  rounded-lg    gap-4 justify-center  ${
              mode === "MYORDERS" ? " bg-green-900 text-white opacity-100 " : ""
            }`}
          >
            <div>คำสั่งซื้อของฉัน</div>
            <GoTag />
          </div>
        </div>
      </div>
    </div>
  );
}
