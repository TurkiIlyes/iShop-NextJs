"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AuthSlide from "./AuthSlide";

const AuthSwiper = () => {
  return (
    <>
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween={30}
        //
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
        className=" landing-swiper h-full w-full bg-grayscale-500 rounded-2xl shadow-[0px_0px_3px] shadow-grayscale-600">
        <SwiperSlide>
          <AuthSlide img="/imgs/authSwiper2WithoutBg.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AuthSlide img="/imgs/authSwiper2WithoutBg.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AuthSwiper;
