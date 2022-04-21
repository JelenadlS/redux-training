import { Icon } from "@iconify/react";
import { StyledStar, StyledRating } from "./styles";

export default function Rating({ rating }) {
  const ratingNumber = (5 / 10) * (rating === null ? "0" : rating.slice(0, 1));
  const filledStar = <StyledStar color icon="bi:star-fill" />;
  const halfFilledStar = <StyledStar color icon="bi:star-half" />;
  const emptyStar = <Icon icon="bi:star" />;

  const starArray = [
    (ratingNumber === 0 && emptyStar) ||
      (ratingNumber === 0.5 && halfFilledStar) ||
      (ratingNumber >= 1 ? filledStar : emptyStar),
    (ratingNumber === 1.5 && halfFilledStar) ||
      (ratingNumber >= 2 ? filledStar : emptyStar),
    (ratingNumber === 2.5 && halfFilledStar) ||
      (ratingNumber >= 3 ? filledStar : emptyStar),
    (ratingNumber === 3.5 && halfFilledStar) ||
      (ratingNumber >= 4 ? filledStar : emptyStar),
    (ratingNumber === 4.5 && halfFilledStar) ||
      (ratingNumber >= 5 ? filledStar : emptyStar),
  ];
  return (
    <StyledRating aria-label={`rating of ${ratingNumber}`}>
      {starArray.map((star, index) => {
        return <span key={index}>{star}</span>;
      })}
    </StyledRating>
  );
}
