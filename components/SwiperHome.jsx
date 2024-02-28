"use client";
import Image from "next/image";

import Slide1 from "../public/images/home-slide1.webp";
import Slide3 from "../public/images/home-slide3.webp";
// import Slide2 from "../public/images/home-slide2.webp";

// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
// register Swiper custom element
register();

export default function SwiperHome() {
  return (
    <>
      <Swiper
        className=""
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
        spaceBetween={0}
        navigation={false}
        effect="fade"
        slidesPerView={1}
        speed={3000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}

        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="">
          <Image className="rounded-lg" src={Slide1} alt="concert église" />
        </SwiperSlide>
        {/* <SwiperSlide className="">
          <Image className="rounded-lg" src={Slide2} alt="tunnel" />
        </SwiperSlide> */}
        <SwiperSlide>
          <Image className="rounded-lg" src={Slide3} alt="easy" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
