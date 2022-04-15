import { Icon } from "@iconify/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import LocationModal from "./LocationModal";
import { restaurantLiked } from "./restaurantsSlice";

export default function RestaurantCard({ data }) {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const bookmarks = useSelector((state) => state.bookmarksReducer.data);

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
    <StyledCard>
      <StyledRating>
        {(5 / 10) * (data.phone === null ? "0" : data.phone.slice(0, 1))}
        {rating.map((rate, index) => (
          <li key={index}>{rate}</li>
        ))}
      </StyledRating>
      <StyledName>{data.name}</StyledName>
      <StyledLike
        with="35px"
        height="35px"
        icon="akar-icons:heart"
        onClick={() => dispatch(restaurantLiked(data.id))}
        color={bookmarks[data.id]}
      />
      <StyledAvailability>
        planning:
        {data.brewery_type === "planning" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
        micro:
        {data.brewery_type === "micro" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
        brewpub:
        {data.brewery_type === "brewpub" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
      </StyledAvailability>
      <StyledLocation
        with="35px"
        height="35px"
        icon="akar-icons:location"
        onClick={() => setShow(true)}
      />
      <LocationModal onClose={() => setShow(false)} show={show} data={data} />
    </StyledCard>
  );
}

const StyledCard = styled.article`
  border: 1px solid grey;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  margin: 15px;
`;

const StyledName = styled.h2`
  grid-column: 2 / 4;
`;

const StyledLike = styled(Icon)`
  grid-column: 4;
  justify-self: end;
  color: ${(props) => (props.color ? "green" : "black")};
  &:active {
    transform: scale(0.9);
  }
`;

const StyledAvailability = styled.p`
  grid-column: 1/ 4;
  display: flex;
  gap: 10px;
`;

const StyledLocation = styled(Icon)`
  grid-column: 4;
  justify-self: end;
`;

const StyledStar = styled(Icon)`
  color: ${(props) => (props.color ? "yellow" : "black")};
`;

const StyledStarHalf = styled(Icon)`
  color: ${(props) => (props.color ? "yellow" : "black")};
`;

const StyledRating = styled.p`
  display: flex;
  gap: 5px;
`;
