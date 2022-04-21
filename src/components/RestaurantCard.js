import { Icon } from "@iconify/react";
import Availability from "./Availability";
import LikeButton from "./LikeButton";
import Rating from "./Rating";
import { StyledButton, StyledCard } from "./styles";

export default function RestaurantCard({ restaurantDetails }) {
  return (
    <StyledCard>
      <Rating rating={restaurantDetails.phone} />
      <p aria-label="name of the restaurant">
        <strong>{restaurantDetails.name}</strong>
      </p>
      <LikeButton id={restaurantDetails.id} />
      <Availability availability={restaurantDetails.brewery_type} />
      <p>
        <StyledButton>
          <Icon width="35px" height="35px" icon="akar-icons:location" />
        </StyledButton>
      </p>
    </StyledCard>
  );
}
