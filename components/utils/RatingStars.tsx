"use client";
import ReactStars from "react-rating-star-with-type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as filledStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const RatingStars = ({ rating }: { rating: number }) => {
  // const [star, setStar] = useState(5);

  // const onChange = (nextValue: any) => {
  //   setStar(nextValue);
  // };

  return (
    <ReactStars
      // onChange={onChange}
      value={rating}
      isEdit={false}
      size={18}
      emptyIcon={<FontAwesomeIcon icon={emptyStar} />}
      halfIcon={<FontAwesomeIcon icon={faStarHalfStroke} />}
      filledIcon={<FontAwesomeIcon icon={filledStar} />}
      activeColors={["#F89118", "#F89118", "#F89118", "#F89118", "#F89118"]}
      inactiveColor="#F89118"
    />
  );
};

export default RatingStars;
