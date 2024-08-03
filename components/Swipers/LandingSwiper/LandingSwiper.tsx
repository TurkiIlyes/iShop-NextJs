"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import LandingSlide from "./LandingSlide";

const LandingSwiper = () => {
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
        className=" landing-swiper bg-black h-full w-full rounded-sm">
        <SwiperSlide>
          <LandingSlide
            title="MacBook Pro 16"
            description="Up to 30% off Voucher"
            img="/imgs/landingSwiper1.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LandingSlide
            title="MacBook Pro 16"
            description="Up to 30% off Voucher"
            img="/imgs/landingSwiper2.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <LandingSlide
            title="MacBook Pro 16"
            description="Up to 30% off Voucher"
            img="/imgs/landingSwiper3.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LandingSwiper;
