import { useDispatch } from "react-redux";
import dayjs from 'dayjs'



export default function CardBidProduct({name,image,startAt,price,description}) {
  const date = dayjs(startAt).format("YYYY-MM-DD HH:mm")

  return (
    <>
   
      <div className="bg-white w-72 h-[340px] m-2 shadow-lg overflow-hidden rounded-md">
      <div className="w-[288px] h-[224px] relative">
        <div className="absolute bg-white w-full p-1 flex gap-7">
          <div className="text-green-900">วันเวลาประมูล</div>
          <div className="text-red-600">{date}</div>
        </div>
        <img
          src={image}
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="p-3">
          <div className="flex flex-col justify-between gap-1">
            <h1>ชื่อสินค้า : {name}</h1>
            <h1 className="text-green-600">ราคา ฿{price}</h1>
          </div>
          {/* <p>{description}</p> */}
        </div>
        <div className="flex justify-evenly p-1 gap-2 h-full ">
        
          <button className="bg-red-600 text-white w-full rounded-md"
                >
            ลบ
          </button>
        </div>
      </div>
    </div>
    
   </>
  );
}
