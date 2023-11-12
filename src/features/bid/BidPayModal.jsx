import { ImGrin } from "react-icons/im";

function BidPayModal({ obj }) {
  return (
    <div className="w-[30vw] p-8 flex flex-col gap-5 font-light items-center text-lg">
      <span className="text-8xl text-green-600">
        <ImGrin />
      </span>
      <p>
        ขอแสดงความยินดีกับ คุณ{" "}
        <span className="font-medium">{obj.winnerName}</span>
      </p>
      <p>ชนะการประมูล</p>
      <div className="flex gap-5 border p-4 rounded-lg">
        <img
          src={obj.product.imageUrl}
          alt="product-image"
          className="w-28 aspect-square object-cover rounded-lg"
        />
        <div className="flex flex-col gap-3">
          <h1>{obj.product.name}</h1>
          <p className="text-xs text-gray-400">{obj.product.description}</p>
          <p>ราคาประมูล {obj.latestBidPrice}</p>
        </div>
      </div>
      <button className="bg-green-700 text-white px-4 py-2 rounded-lg">
        จ่ายเงิน
      </button>
    </div>
  );
}

export default BidPayModal;

// = {
//     latestWinnerId: 1,
//     latestBidPrice: 200,
//     winnerName: "Time Ruchutrakool",
//     product: {
//       id: 1,
//       imageUrl:
//         "https://res.cloudinary.com/dskp1knm4/image/upload/v1699685266/ptczy8djwmnyitgxge6h.jpg",
//       name: "เสื้อสายเดี่ยว สายสม็อค ลายดอกไม้",
//       description:
//         "เสื้อสายเดี่ยว สายสม็อค ลายดอกไม้ สไตล์เกาหลี น่ารักๆ ใส่สบาย ทรงหลวม",
//     },
//   },
