import { GrNext, GrPrevious } from "react-icons/gr";
import { useState } from "react";
import ImageController from "../../components/ImageController";
import ImageCarousel from "../../components/ImageCarousel";
import Heading from "../../components/Heading";
import useModal from "../../hooks/useModal";
import { useSearchParams, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getbidProductById } from "../../services/apiProduct";
// import { formatDate } from "../../utils/helper";
import { useCountdown } from "../../hooks/useCountDown";

function BidProduct() {
  const [selectedImage, setSelectedImage] = useState(0);
  const { productId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState(null);
  const [disabledIsBiding, setDisabledIsBiding] = useState(false);
  const { dispatch: modal } = useModal();

  useEffect(() => {
    async function getbidProduct() {
      const { product } = await getbidProductById(productId);
      setProduct(() => product);
      // console.log(formatDate(new Date(product?.startedAt)));
    }
    getbidProduct();
  }, [productId]);

  const onNext = () =>
    setSelectedImage((cur) => (cur + 1) % product.images.length);
  const onPrev = () =>
    setSelectedImage(
      (cur) => (cur - 1 + product.images.length) % product.images.length
    );
  return (
    <div className="grid grid-cols-2 mt-10">
      <div className="px-20">
        <div className="w-full p-2 relative flex justify-center">
          <img
            src={product?.images[selectedImage]?.imageUrl}
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
        <ImageCarousel
          images={product?.images}
          setSelectedImage={setSelectedImage}
        />
      </div>
      <div className="flex flex-col font-light gap-6 mr-6">
        <Heading big={true}>{product?.name}</Heading>
        <div className="flex items-center gap-10">
          <p>ราคาเปิดประมูล</p>
          <p className="text-xl text-[#1D9E34]">฿ {product?.initialPrice}</p>
        </div>
        <p className="text-sm text-[#818B9C] font-light">
          {product?.description}
        </p>
        <p>
          ผู้ขาย {product?.sellerFirstName} {product?.sellerLastName}
        </p>
        <hr />
        <p className="text-xs text-[#818B9C] font-light">เวลาประมูล</p>
        <div className="flex gap-10 items-center">
          <Heading big={true}>เริ่มประมูลในอีก </Heading>
          <CountDown
            targetDate={product?.startedAt}
            duration={product?.duration}
            setDisabledIsBiding={setDisabledIsBiding}
          />
        </div>
        <button
          className="w-fit py-3 px-5 bg-black text-white rounded-lg disabled:bg-slate-200"
          disabled={disabledIsBiding}
          onClick={() => {
            searchParams.set("biding", product?.name);
            setSearchParams(searchParams);
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

function CountDown({ duration, targetDate = null, setDisabledIsBiding }) {
  const [days, hours, minutes, seconds] = useCountdown(
    targetDate,
    duration,
    setDisabledIsBiding
  );

  if (
    new Date(targetDate).getTime() + duration <
    Date.now() + 7 * 60 * 60 * 1000
  ) {
    return <p>สิ้นสุดการประมูล</p>;
  }
  if (new Date(targetDate).getTime() < Date.now() + 7 * 60 * 60 * 1000)
    return <p>กำลังประมูล</p>;
  return (
    <p className="text-red-700 text-xl">
      {days}D {hours}H {minutes}M {seconds}S
    </p>
  );
}
