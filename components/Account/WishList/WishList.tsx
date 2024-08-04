import SectionBox from "../SectionBox";
import { fetchWishList } from "@/utils/Api/wishListApi";
import ProductCard from "@/components/Product/ProductCard/ProductCard";

import ClearWishListButton from "./ClearWishListButton";

const WishList = async () => {
  const wishList = await fetchWishList();
  console.log(wishList);
  return (
    <div className="w-full h-full flex flex-col gap-4 bg-grayscale-200 rounded-xl shadow-[0px_0px_3px] shadow-grayscale-500">
      <div className=" flex justify-between items-center px-6 py-2 border-b-[1px] border-grayscale-400">
        <span className=" text-sm font-medium text-grayscale-600">
          Wish List
        </span>
        <ClearWishListButton />
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-8 py-8 ">
        {wishList?.map((e, i) => {
          return (
            <ProductCard
              key={i}
              id={e._id}
              title={e.title}
              discount={e.discount}
              price={e.price}
              priceAfterDiscount={e.priceAfterDiscount}
              imageCover={e.imageCover}
              ratingsAverage={e.ratingsAverage}
              ratingsQuantity={e.ratingsQuantity}
              addedToWishList={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
