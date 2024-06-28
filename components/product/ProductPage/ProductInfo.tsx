import { faCircle, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductInfo = () => {
  return (
    <div className="">
      <h1 className=" text-2xl font-semibold text-grayscale-900">
        Peanuts Long Sleeve Sweatshirt
      </h1>
      <p className=" max-w-[400px] text-grayscale-800 text-sm leading-normal my-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        exercitationem voluptas vel dolores vitae harum sit.
      </p>
      <div className="  flex items-center gap-2 my-4">
        <span className=" text-base font-semibold text-success-900">
          In Stock
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
          <span className="text-sm font-bold text-grayscale-900">4.9</span>
        </div>
        <span className="text-sm font-normal text-grayscale-800">
          (225 reviews)
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
