import { ProductType } from "@/redux/slices/productsSlice";
import Image from "next/image";

const ProductImageGallery = ({ product }: { product?: ProductType | null }) => {
  return (
    <div className="">
      <div className=" grid max-w-[450px] gap-4 mx-auto">
        <div className=" w-full h-fit relative bg-grayscale-400 rounded-sm shadow-[0_0_3px] shadow-grayscale-600">
          <Image
            src={product?.imageCover || ""}
            width={500}
            height={500}
            objectFit="fit"
            alt={`${product?.title} image cover`}
            className=" w-full h-fit"
          />
        </div>
        <div className=" w-full grid grid-cols-5  gap-4 ">
          {product?.images?.map((e, i) => {
            return (
              <div
                key={i}
                className={` w-full h-fit relative bg-grayscale-400 shadow-[0_0_3px] shadow-grayscale-600 
                ${
                  i === 0 &&
                  " border-4 border-white outline outline-1 outline-grayscale-900 shadow-grayscale-900"
                }`}
              >
                <Image
                  src={e}
                  width={500}
                  height={500}
                  objectFit="cover"
                  alt={`${product?.title}-${i} image`}
                  className=" h-fit w-full p-1"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
