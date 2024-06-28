"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import ProductCard from "./ProductCard/ProductCard";

const ProductSwiper = ({
  data,
  prevEl,
  nextEl,
}: {
  data: {
    title: string;
    discount: number;
    price: number;
    priceAfterDiscount: number;
    img: string;
    rating: number;
    ratingCount: number;
  }[];
  prevEl: string;
  nextEl: string;
}) => {
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={30}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        allowTouchMove={false}
        modules={[Navigation]}
        navigation={{
          prevEl: `.${prevEl}`,
          nextEl: `.${nextEl}`,
        }}
        className="flex  h-full w-full">
        {data.map((e, i) => {
          return (
            <SwiperSlide key={i}>
              <ProductCard
                title={e.title}
                discount={e.discount}
                price={e.price}
                priceAfterDiscount={e.priceAfterDiscount}
                image={e.img}
                rating={e.rating}
                ratingCount={e.ratingCount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductSwiper;

{
  /* <div className="container flex h-full py-9 px-10 ">
                <div className=" h-full flex-1 text-grayscale-200 ">
                    <div className="flex flex-col  h-full">
                        <span className="py-7">MacBook Pro 16</span>
                        <h2 className="text-5xl font-medium leading-tight">
                        Up to 30% off Voucher
                        </h2>
                    </div>
                </div>
                <div className=" w-[270px] relative">
                    <Image src="/imgs/ProductSwiper1.png"  layout="fill" objectFit="cover" alt="ProductSwiper1" className=""  />
                </div>
            </div> */
}
