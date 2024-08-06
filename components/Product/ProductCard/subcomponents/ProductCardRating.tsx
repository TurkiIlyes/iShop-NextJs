import RatingStars from "../../common/RatingStars";

const ProductCardRating = ({
  ratingsAverage,
  ratingsQuantity,
}: {
  ratingsAverage?: number;
  ratingsQuantity?: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <RatingStars ratingsAverage={ratingsAverage} />

      <span className=" text-xs md:text-xs font-medium md:font-semibold">
        ({ratingsQuantity || 0})
      </span>
    </div>
  );
};

export default ProductCardRating;
