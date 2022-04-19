import { Icon } from "@iconify/react";
import { StyledStar, StyledRating } from "./styles";

export default function Rating({ rating }) {
  const calculatedRating =
    (5 / 10) * (rating === null ? "0" : rating.slice(0, 1));
  const filledStar = <StyledStar color icon="bi:star-fill" />;
  const halfStar = <StyledStar color icon="bi:star-half" />;
  const emptyStar = <Icon icon="bi:star" />;
  const stars = [
    (calculatedRating === 0 && emptyStar) ||
      (calculatedRating === 0.5 && halfStar) ||
      (calculatedRating >= 1 ? filledStar : emptyStar),
    (calculatedRating === 1.5 && halfStar) ||
      (calculatedRating >= 2 ? filledStar : emptyStar),
    (calculatedRating === 2.5 && halfStar) ||
      (calculatedRating >= 3 ? filledStar : emptyStar),
    (calculatedRating === 3.5 && halfStar) ||
      (calculatedRating >= 4 ? filledStar : emptyStar),
    (calculatedRating === 4.5 && halfStar) ||
      (calculatedRating >= 5 ? filledStar : emptyStar),
  ];

  return (
    <StyledRating
      aria-label={`rating of 
      ${calculatedRating}`}
    >
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </StyledRating>
  );
}
