import { Icon } from "@iconify/react";
import { StyledAvailability } from "./styles";

export default function Availability({ brewery }) {
  return (
    <StyledAvailability>
      planning:
      {brewery === "planning" ? (
        <Icon icon="fluent:presence-available-10-regular" />
      ) : (
        <Icon icon="ic:outline-do-not-disturb-on" />
      )}
      micro:
      {brewery === "micro" ? (
        <Icon icon="fluent:presence-available-10-regular" />
      ) : (
        <Icon icon="ic:outline-do-not-disturb-on" />
      )}
      brewpub:
      {brewery === "brewpub" ? (
        <Icon icon="fluent:presence-available-10-regular" />
      ) : (
        <Icon icon="ic:outline-do-not-disturb-on" />
      )}
    </StyledAvailability>
  );
}
