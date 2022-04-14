import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import LocationModal from "./LocationModal";
//import { restaurantLikedUpdated } from "./restaurantsSlice";

export default function RestaurantCard({ data }) {
  const [show, setShow] = useState(false);

  //const restaurants = useSelector((state) => state.restaurants.list);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(restaurantLikedUpdated({ id: data.id, like }));
  // }, [like, dispatch]);

  // const handleLike = () => {
  //   setLike(!like);
  // };

  // mit Redux, ändert sich aber noch nichts da
  // const handleLike = () => {
  //     dispatch(restaurantLikedUpdated({ id: data.id, liked: !liked }));

  // };

  console.log(data);
  return (
    <StyledCard>
      <p>rating</p>
      <StyledName>{data.name}</StyledName>
      <StyledLike
        with="35px"
        height="35px"
        icon="akar-icons:heart"
        //  onClick={handleLike}
        // color={like}
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
