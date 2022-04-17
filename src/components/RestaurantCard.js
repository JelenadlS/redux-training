import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Availability from "./Availability";
import LocationModal from "./LocationModal";
import Rating from "./Rating";
import { restaurantLiked } from "../redux/Slices";
import {
  StyledButton,
  StyledCard,
  StyledName,
  StyledLike,
  StyledLocation,
} from "./styles";

export default function RestaurantCard({ data }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarksReducer.data);

  return (
    <StyledCard aria-label="detailed information">
      <Rating data={data} />
      <StyledName aria-label="name of the restaurant">{data.name}</StyledName>
      <StyledButton
        type="button"
        aria-label={bookmarks[data.id] ? "liked" : "not liked"}
        onClick={() => dispatch(restaurantLiked(data.id))}
      >
        <StyledLike
          with="35px"
          height="35px"
          icon="akar-icons:heart"
          color={bookmarks[data.id]}
        />
      </StyledButton>
      <Availability brewery={data.brewery_type} />
      <StyledButton
        type="button"
        aria-label="click for display location"
        onClick={() => setShow(true)}
      >
        <StyledLocation with="35px" height="35px" icon="akar-icons:location" />
      </StyledButton>
      <LocationModal onClose={() => setShow(false)} show={show} data={data} />
    </StyledCard>
  );
}
