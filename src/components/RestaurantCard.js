import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Availability from "./Availability";
import LocationModal from "./LocationModal";
import Rating from "./Rating";
import { restaurantLiked } from "../redux/Slices";
import { StyledCard, StyledName, StyledLike, StyledLocation } from "./styles";

export default function RestaurantCard({ data }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarksReducer.data);

  return (
    <StyledCard>
      <Rating data={data} />
      <StyledName>{data.name}</StyledName>
      <StyledLike
        with="35px"
        height="35px"
        icon="akar-icons:heart"
        onClick={() => dispatch(restaurantLiked(data.id))}
        color={bookmarks[data.id]}
      />
      <Availability brewery={data.brewery_type} />
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
