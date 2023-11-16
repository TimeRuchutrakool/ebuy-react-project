import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
function ImageBanner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="swiper h-[670px] -z-10 "
      >
        <SwiperSlide>
          <div className="bg-[#F7F7F7] flex justify-around items-center h-full ">
            <div className=" flex flex-col gap-10 p-16">
              <h1 className="text-4xl font-semibold">
                Upgrade Your Wardrobe With Our Collection
              </h1>
              <p>
                Eget neque aenean viverra aliquam tortor diam nunc. Dis
                pellentesque lectus quis velit fusce aenean nunc dui
                consectetur. Eu lorem est ullamcorper nisl amet non mollis.
              </p>
            </div>
            <img src="src/assets/cover.png" alt="cover-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src="src/assets/reward.jpg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageBanner;
