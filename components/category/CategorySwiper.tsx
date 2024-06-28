"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CategoryBox from "./CategoryBox";

const CategorySwiper = ({
  prevEl,
  nextEl,
  data,
}: {
  prevEl: string;
  nextEl: string;
  data: { title: string; icon: any }[];
}) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween="20"
        slidesPerView={2}
        breakpoints={{
          576: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        allowTouchMove={false}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevEl}`,
          nextEl: `.${nextEl}`,
        }}
        className="flex h-full w-full">
        {data.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <CategoryBox title={e.title} icon={e.icon} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CategorySwiper;
