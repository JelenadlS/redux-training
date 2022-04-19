import { StyledCard } from "./styles";
import Rating from "./Rating";

export default function RestaurantCard({ data }) {
  return (
    <StyledCard>
      <Rating rating={data.phone} />
      <h2 aria-label="name of restaurant">{data.name}</h2>
      <p>like</p>
      <p>availability</p>
      <p>location</p>
    </StyledCard>
  );
}
