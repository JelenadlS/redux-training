import { StyledCard } from "./styles";

export default function RestaurantCard({ restaurantDetails }) {
  return (
    <StyledCard>
      <p>rating</p>
      <p>{restaurantDetails.name}</p>
      <p>like</p>
      <p>availability</p>
      <p>location</p>
    </StyledCard>
  );
}
