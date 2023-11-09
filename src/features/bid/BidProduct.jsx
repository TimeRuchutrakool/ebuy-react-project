import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";
import ImageController from "../../components/ImageController";
import ImageCarousel from "../../components/ImageCarousel";
import Heading from "../../components/Heading";
import useModal from "../../hooks/useModal";
import { useSearchParams } from "react-router-dom";

const images = [
  {
    id: 1,
    imageUrl:
      "https://www.billboard.com/wp-content/uploads/2023/10/Jennie-Kim-cannes-2023-a-billboard-1548.jpg",
  },
  {
    id: 2,
    imageUrl:
      "https://www.nme.com/wp-content/uploads/2023/09/jennie-working-on-solo-music-220923-696x442.jpg",
  },
  {
    id: 3,
    imageUrl: "https://f.ptcdn.info/916/081/000/s2439p4e2b0FNpEWoq3h-o.jpg",
  },
  {
    id: 4,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/jennie-kim-blackpinl-1658391011.jpg?crop=0.614xw:0.409xh;0.173xw,0.103xh&resize=980:*",
  },
  {
    id: 5,
    imageUrl:
      "https://i.pinimg.com/originals/11/96/16/11961692edf30e391038ae403ba70803.jpg",
  },
];

function BidProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { dispatch: modal } = useModal();
  const onNext = () => setSelectedImage((cur) => (cur + 1) % images.length);
  const onPrev = () =>
    setSelectedImage((cur) => (cur - 1 + images.length) % images.length);
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="px-20">
        <div className="w-full p-2 relative flex justify-center">
          <img
            src={images[selectedImage].imageUrl}
            alt="product-image"
            className="w-full rounded-md aspect-square object-cover"
          />
          <ImageController position="top-1/2 left-5" onClick={onPrev}>
            <GrPrevious />
          </ImageController>
          <ImageController position="top-1/2 right-5" onClick={onNext}>
            <GrNext />
          </ImageController>
        </div>
        <ImageCarousel images={images} setSelectedImage={setSelectedImage} />
      </div>
      <div className="w-full flex flex-col font-light gap-6">
        <Heading big={true}>Metallica 90s T-shirt</Heading>
        <div className="flex items-center gap-10">
          <p>ราคาเปิดประมูล</p>
          <p className="text-xl text-[#1D9E34]">฿ 590</p>
        </div>
        <p className="text-sm text-[#818B9C] font-light">
          เสื้อ Metallica งานใหม่ แต่ detail ระเอียด ตะเข็บเดี่ยว
          เหมาะสำหรับคนที่ชื่นชอบเสื้อวง ส่วนใครไม่ชอบก็เรื่องของมึง
          รีบในซื้อด่วน ภายในเวลาจำกัด
        </p>
        <hr />
        <p className="text-xs text-[#818B9C] font-light">
          เวลาประมูล 2023-11-09 20 : 00
        </p>
        <div className="flex gap-10 items-center">
          <Heading big={true}>เริ่มประมูลในอีก</Heading>
          <p className="text-red-700 text-xl">00 : 10 : 22</p>
        </div>
        <button
          className="w-fit py-3 px-5 bg-black text-white rounded-lg"
          onClick={() => {
            searchParams.set('biding','Metallica 90s T-shirt')
            setSearchParams(searchParams)
            modal({ type: "bid" });
          }}
        >
          ลงประมูล
        </button>
      </div>
    </div>
  );
}

export default BidProduct;
