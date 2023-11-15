export default function CardBidProduct() {

  
  return (
    <div className="bg-white w-56 h-[340px] m-2 shadow-lg overflow-hidden rounded-md ">
      <div className="w-[224px] h-[224px] relative ">
        <div className="absolute bg-white w-full p-1 grid-cols-2 grid text-center">
          <div className="text-green-900">เวลาคงเหลือ</div>
          <div className="text-red-600">10:33:13</div>
        </div>
        <img
          src="https://media.discordapp.net/attachments/1169023951532466289/1169031063729872916/8b3431a6-a437-42e8-8dbc-3393bad5e57a.png?ex=6553ec05&is=65417705&hm=16b2bd54edf7761d6dc84e43dfa85b2d934e03b9525957f1cbc85dc99e144a3f&=&width=746&height=936"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="p-3">
          <div className="flex justify-between">
            <h1>กางเกงขาสั้น</h1>
            <h1 className="text-green-600">฿299</h1>
          </div>
          <p>การระเอียดบลาๆ</p>
        </div>
        <div className="flex justify-evenly p-3 gap-2 h-full ">
          <button className="bg-gray-300 w-full rounded-md">แก้ไข</button>
          <button className="bg-red-600 text-white w-full rounded-md">
            ลบ
          </button>
        </div>
      </div>
    </div>
  );
}
