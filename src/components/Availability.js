import { Icon } from "@iconify/react";
import { StyledAvailability } from "./styles";

export default function Availability({ availability }) {
  const burgertypes = {
    hamburger: availability === "planning",
    cheeseburger: availability === "micro",
    veggie: availability === "brewpub",
  };

  return (
    <StyledAvailability aria-label="availability">
      {Object.entries(burgertypes).map((type, index) => {
        const availabilityStatus = type[1];
        return (
          <span key={index}>
            {type[0]}
            <Icon
              icon={
                availabilityStatus
                  ? "fluent:presence-available-10-regular"
                  : "ic:outline-do-not-disturb-on"
              }
            />
          </span>
        );
      })}
    </StyledAvailability>
  );
}
