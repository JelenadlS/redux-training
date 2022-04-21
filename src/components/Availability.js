import { Icon } from "@iconify/react";
import { StyledAvailability } from "./styles";

export default function Availability({ availability }) {
  const avilabilityStatus = {
    hamburger: availability === "planning",
    cheeseburger: availability === "micro",
    veggie: availability === "brewpub",
  };

  return (
    <StyledAvailability>
      {Object.entries(avilabilityStatus).map((available, index) => {
        const availableValue = available[1];
        return (
          <span key={index}>
            {available[0]}
            <Icon
              icon={
                availableValue
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
