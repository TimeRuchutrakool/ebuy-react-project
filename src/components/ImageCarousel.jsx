import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

function ImageCarousel({ images, setSelectedImage }) {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={false}
      freeMode={true}
      mousewheel={true}
      rewind={true}
      modules={[FreeMode, Mousewheel]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="px-2 cursor-pointer" onClick={() => setSelectedImage(index)}>
            <img src={image?.imageUrl} className="rounded-md aspect-square object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
