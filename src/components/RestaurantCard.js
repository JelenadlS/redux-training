import { StyledCard } from "./styles";

export default function RestaurantCard({ data }) {
  return (
    <StyledCard>
      <p>rating</p>
      <p>{data.name}</p>
      <p>like</p>
      <p>availability</p>
      <p>location</p>
    </StyledCard>
  );
}
