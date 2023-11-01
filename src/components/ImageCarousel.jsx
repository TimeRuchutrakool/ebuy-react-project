import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

function CategoryCarousel() {
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={false}
      freeMode={true}
      mousewheel={true}
      rewind={true}
      modules={[FreeMode, Mousewheel]}
      className="swiper"
    >
      {[1, 2, 3].map((cat, index) => (
        <SwiperSlide key={index}>
          <div>{cat}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CategoryCarousel;
