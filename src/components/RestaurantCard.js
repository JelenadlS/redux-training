import Rating from "./Rating";
import { StyledCard } from "./styles";

export default function RestaurantCard({ restaurantDetails }) {
  return (
    <StyledCard>
      <Rating rating={restaurantDetails.phone} />
      <p>{restaurantDetails.name}</p>
      <p>like</p>
      <p>availability</p>
      <p>location</p>
    </StyledCard>
  );
}
