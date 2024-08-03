"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CategoryBox from "../Category/CategoryBox";
import { CategoryType } from "@/redux/slices/categoriesSlice";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
const CategorySwiper = ({
  prevEl,
  nextEl,
  categories,
}: {
  prevEl: string;
  nextEl: string;
  categories: CategoryType[];
}) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween="10"
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
            slidesPerView: 6,
          },
        }}
        allowTouchMove={false}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevEl}`,
          nextEl: `.${nextEl}`,
        }}
        className="flex h-full w-full"
      >
        {categories.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <CategoryBox name={e.name} image={e.image} index={i} id={e._id} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default CategorySwiper;
