"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ProgressContent from "./ProgressContent";
import AuthButton from "./AuthButton";
import AuthSlide from "./AuthSlide";
import useAuthSwiper from "./useAuthSwiper";

const AuthSwiper = () => {
  const { progressCircle, progressContent, onAutoplayTimeLeft } =
    useAuthSwiper();

  return (
    <div className="relative w-full h-full">
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.prevAuthButton`,
          nextEl: `.nextAuthButton`,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className=" auth-swiper w-full h-full rounded-xl"
      >
        <SwiperSlide>
          <AuthSlide img="/imgs/authSwiperImage1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AuthSlide img="/imgs/authSwiperImage2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <AuthSlide img="/imgs/authSwiperImage3.png" />
        </SwiperSlide>
      </Swiper>
      <ProgressContent
        progressCircle={progressCircle}
        progressContent={progressContent}
      />
      <AuthButton className="prevAuthButton" icon="left" />
      <AuthButton className="nextAuthButton" icon="right" />
    </div>
  );
};

export default AuthSwiper;
