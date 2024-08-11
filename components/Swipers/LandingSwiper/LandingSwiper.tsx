"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import LandingSlide from "./LandingSlide";
import { faApple } from "@fortawesome/free-brands-svg-icons";

const landingSwiperData = [
  {
    title: "MacBook Pro 16",
    brandIcon: faApple,
    brandName: "iPhone 14 Series",
    description: "Up to 30% off Voucher",
    img: "/imgs/landingSwiper1.png",
  },
  {
    title: "MacBook Pro 16",
    brandIcon: faApple,
    brandName: "iPhone 14 Series",
    description: "Up to 30% off Voucher",
    img: "/imgs/landingSwiper2.png",
  },
  {
    title: "MacBook Pro 16",
    brandIcon: faApple,
    brandName: "iPhone 14 Series",
    description: "Up to 30% off Voucher",
    img: "/imgs/landingSwiper3.png",
  },
];

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
        className=" landing-swiper bg-black h-full w-full lg:rounded-sm"
      >
        {landingSwiperData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <LandingSlide
                title={item.title}
                brandIcon={item.brandIcon}
                brandName={item.brandName}
                description={item.description}
                img={item.img}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default LandingSwiper;
