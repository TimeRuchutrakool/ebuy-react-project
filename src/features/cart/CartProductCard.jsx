import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";
import { TbCurrencyBaht } from "react-icons/tb";

export default function CartProductCard() {
  return (
    <div className=" p-4 shadow-sd  flex flex-col gap-2 rounded-md border border-borderColor">
      <div className="flex gap-4 mb-4">
        <img
          src="https://st4.depositphotos.com/2712843/24006/i/1600/depositphotos_240068650-stock-photo-bangkok-thailand-november-2018-fendi.jpg"
          alt="fendi"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p> Seller : seller user</p>
          <p className="text-gray-400 font-extralight">Central</p>
        </div>
      </div>
      <div className=" flex gap-8">
        <div>
          <img
            src="https://down-th.img.susercontent.com/file/04dcbdf1849656514bb2d5c4651278b7"
            alt=""
            className="w-24 h-24 rounded-md"
          />
        </div>
        <div className=" flex flex-col max-w-[512px] ">
          <p>เสื้อยืดวินเทจ Rock Star 7th street ของแท้ 100% พร้อมส่ง</p>
          <p>size : xl</p>
          <p className="text-successColor flex items-center text-[#1D9E34] text-xl">
            1000 <TbCurrencyBaht className="text-2xl" />
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex border border-borderColor py-1 px-2 rounded-md w-24 justify-around">
            <div className="self-center cursor-pointer hover:text-[#E04124]">
              <FiMinus />
            </div>
            <div className="self-center"> 1</div>
            <div className="self-center cursor-pointer hover:text-[#1D9E34]">
              <FiPlus />
            </div>
          </div>
        </div>
        <div className="flex items-center   ">
          <div className="  cursor-pointer border border-borderColor rounded-md p-2  hover:text-[#E04124]">
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
}
