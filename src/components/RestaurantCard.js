import { Icon } from "@iconify/react";
import Rating from "./Rating";
import { StyledButton, StyledCard } from "./styles";

export default function RestaurantCard({ restaurantDetails }) {
  return (
    <StyledCard>
      <Rating rating={restaurantDetails.phone} />
      <p aria-label="name of the restaurant">
        <strong>{restaurantDetails.name}</strong>
      </p>
      <p>
        <StyledButton>
          <Icon width="35px" height="35px" icon="akar-icons:heart" />
        </StyledButton>
      </p>
      <p>availability</p>
      <p>location</p>
    </StyledCard>
  );
}
