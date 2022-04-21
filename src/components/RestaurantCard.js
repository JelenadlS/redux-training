import { Icon } from "@iconify/react";
import { useState } from "react";

import Availability from "./Availability";
import LikeButton from "./LikeButton";
import LocationModal from "./LocationModal";
import Rating from "./Rating";
import { StyledButton, StyledCard } from "./styles";

export default function RestaurantCard({ restaurantDetails }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <StyledCard>
      <Rating rating={restaurantDetails.phone} />
      <p aria-label="name of the restaurant">
        <strong>{restaurantDetails.name}</strong>
      </p>
      <LikeButton id={restaurantDetails.id} />
      <Availability availability={restaurantDetails.brewery_type} />

      <StyledButton
        type="button"
        aria-label="click to show location"
        onClick={() => setShowModal(true)}
      >
        <Icon width="35px" height="35px" icon="akar-icons:location" />
      </StyledButton>
      <LocationModal
        handleClose={() => setShowModal(false)}
        showModal={showModal}
        locationData={restaurantDetails}
      />
    </StyledCard>
  );
}
