"use client";
import ReactStars from "react-rating-star-with-type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as filledStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

const RatingStars = ({ ratingsAverage }: { ratingsAverage?: number }) => {
  // const [star, setStar] = useState(5);

  // const onChange = (nextValue: any) => {
  //   setStar(nextValue);
  // };

  return (
    <ReactStars
      // onChange={onChange}
      value={ratingsAverage || 0}
      isEdit={false}
      size={12}
      emptyIcon={<FontAwesomeIcon icon={emptyStar} />}
      halfIcon={<FontAwesomeIcon icon={faStarHalfStroke} />}
      filledIcon={<FontAwesomeIcon icon={filledStar} />}
      activeColors={["#F89118", "#F89118", "#F89118", "#F89118", "#F89118"]}
      inactiveColor="#F89118"
    />
  );
};

export default RatingStars;
