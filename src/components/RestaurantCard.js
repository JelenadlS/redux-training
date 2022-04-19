import { Icon } from "@iconify/react";
import { StyledCard, StyledButton } from "./styles";
import Rating from "./Rating";
import Availability from "./Availability";
import LikeButton from "./LikeButton";

export default function RestaurantCard({ data }) {
  return (
    <StyledCard>
      <Rating rating={data.phone} />
      <h2 aria-label="name of restaurant">{data.name}</h2>
      <LikeButton id={data.id} />
      <Availability availability={data.brewery_type} />
      <StyledButton type="button" aria-label="location">
        <Icon with="35px" height="35px" icon="akar-icons:location" />
      </StyledButton>
    </StyledCard>
  );
}
