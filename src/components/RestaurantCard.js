import { StyledCard, StyledButton, StyledLike } from "./styles";
import Rating from "./Rating";

export default function RestaurantCard({ data }) {
  return (
    <StyledCard>
      <Rating rating={data.phone} />
      <h2 aria-label="name of restaurant">{data.name}</h2>
      <StyledButton type="button" aria-label="like button">
        <StyledLike with="35px" height="35px" icon="akar-icons:heart" />
      </StyledButton>
      <p>availability</p>
      <p>location</p>
    </StyledCard>
  );
}
