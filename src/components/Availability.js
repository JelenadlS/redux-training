import { Icon } from "@iconify/react";
import { StyledAvailability } from "./styles";

export default function Availability({ brewery }) {
  return (
    <StyledAvailability>
      <p
        aria-label={
          brewery === "planning" ? "is available" : "is not available"
        }
      >
        planning:
        {brewery === "planning" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
      </p>
      <p aria-label={brewery === "micro" ? "is available" : "is not available"}>
        micro:
        {brewery === "micro" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
      </p>
      <p
        aria-label={brewery === "brewpub" ? "is available" : "is not available"}
      >
        brewpub:
        {brewery === "brewpub" ? (
          <Icon icon="fluent:presence-available-10-regular" />
        ) : (
          <Icon icon="ic:outline-do-not-disturb-on" />
        )}
      </p>
    </StyledAvailability>
  );
}
