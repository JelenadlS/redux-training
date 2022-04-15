import { Icon } from "@iconify/react";

import { StyledStar, StyledStarHalf, StyledRating } from "./styles";

export default function Rating({ data }) {
  const filledStar = <StyledStar color icon="bi:star-fill" />;
  const halfStar = <StyledStarHalf color icon="bi:star-half" />;
  const emptyStar = <Icon color icon="bi:star" />;
  const calculatedRating =
    (5 / 10) * (data.phone === null ? "0" : data.phone.slice(0, 1));

  const rating = [
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
    <StyledRating>
      {(5 / 10) * (data.phone === null ? "0" : data.phone.slice(0, 1))}
      {rating.map((rate, index) => (
        <li key={index}>{rate}</li>
      ))}
    </StyledRating>
  );
}
