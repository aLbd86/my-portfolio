"use client";
import Image from "next/image";
import Slide3 from "../public/images/slide4.jpeg";

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
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={false}
        pagination={{ clickable: true }}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="">
          <Image className="rounded-lg"  src={Slide3} alt="dj ia" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-lg"  src={Slide3} alt="tunnel" />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="rounded-lg"  src={Slide3} alt="easy" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
