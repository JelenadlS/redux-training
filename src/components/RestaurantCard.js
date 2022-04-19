import { Icon } from "@iconify/react";
import { StyledCard, StyledButton } from "./styles";
import Rating from "./Rating";
import Availability from "./Availability";
import LikeButton from "./LikeButton";
import LocationModal from "./LoactionModal";
import { useState } from "react";

export default function RestaurantCard({ data }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <StyledCard>
      <Rating rating={data.phone} />
      <h2 aria-label="name of restaurant">{data.name}</h2>
      <LikeButton id={data.id} />
      <Availability availability={data.brewery_type} />
      <StyledButton
        type="button"
        aria-label="location"
        onClick={() => setShowModal(true)}
      >
        <Icon with="35px" height="35px" icon="akar-icons:location" />
      </StyledButton>
      <LocationModal
        onClose={() => setShowModal(false)}
        showModal={showModal}
        data={data}
      />
    </StyledCard>
  );
}
