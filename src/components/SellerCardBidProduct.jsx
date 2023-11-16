import dayjs from "dayjs";

export default function CardBidProduct({ name, image, startAt, price }) {
  const date = dayjs(startAt).format("YYYY-MM-DD HH:mm");

  return (
    <div className="bg-white m-2 shadow-lg overflow-hidden rounded-md text-sm p-2 flex flex-col items-center">
      <div className="">
        <div className=" bg-white p-1 flex gap-7">
          <p className="text-green-900">วันเวลาประมูล</p>
          <p className="text-red-600">{date}</p>
        </div>
        <img src={image} alt="" className="object-contain h-48 w-full" />
      </div>
      <div>
        <div className="p-3">
          <div className="flex flex-col justify-between gap-1">
            <h1>ชื่อสินค้า : {name}</h1>
            <h1 className="text-green-600">ราคา ฿{price}</h1>
          </div>
        </div>
        <div className="flex justify-evenly p-1 gap-2 h-full ">
          <button className="bg-red-600 text-white w-full rounded-md py-1">
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}
