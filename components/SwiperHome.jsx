"use client";
import Image from "next/image";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// register Swiper custom elements
register();

export default function SwiperHome() {
  return (
    <>
      <Swiper
        className="flex w-full"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="flex">
          <Image
            className="flex w-full rounded-lg"
            width={400}
            height={600}
            object-fit="fill"
            src="/images/swiper-home-slide-1.webp"
            alt="dj ia"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="flex w-full rounded-lg"
            width={400}
            height={600}
            src="/images/swiper-home-slide-2.webp"
            alt="tunnel"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="flex w-full rounded-lg"
            width={400}
            height={600}
            src="/images/swiper-home-slide-3.webp"
            alt="easy"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
