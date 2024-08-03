import { ProductType } from "@/redux/slices/productsSlice";
import { faCircle, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductInfo = ({ product }: { product?: ProductType | null }) => {
  return (
    <div className="">
      <h1 className=" text-2xl font-semibold text-grayscale-900">
        {product?.title}
      </h1>
      <p className=" max-w-[400px] text-grayscale-800 text-sm leading-normal my-4">
        {product?.description}
      </p>
      <div className="  flex items-center gap-2 my-4">
        <span className=" text-base font-semibold text-success-900">
          {product?.status}
        </span>
        <FontAwesomeIcon
          icon={faCircle}
          className=" w-4 h-4 p-1.5 text-grayscale-800"
        />
        <div className=" flex items-center gap-1">
          <FontAwesomeIcon
            icon={faStar}
            className="w-4 h-4 text-customOrange-800"
          />
          <span className="text-sm font-bold text-grayscale-900">
            {product?.ratingsAverage}
          </span>
        </div>
        <span className="text-sm font-normal text-grayscale-800">
          ({product?.ratingsQuantity || 0} reviews)
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
