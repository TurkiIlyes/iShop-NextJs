import RatingStars from "../../utils/RatingStars";

const ProductCardRating = ({rating, ratingCount}: {rating: number, ratingCount: number}) => {
  return (
    <div className="flex items-center gap-2">
          <RatingStars rating={rating} />

          <span className=" text-sm font-semibold">({ratingCount})</span>
        </div>
  )
}

export default ProductCardRating