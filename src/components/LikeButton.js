import { Icon } from "@iconify/react";
import { StyledButton } from "./styles";

export default function LikeButton() {
  return (
    <p>
      <StyledButton>
        <Icon width="35px" height="35px" icon="akar-icons:heart" />
      </StyledButton>
    </p>
  );
}
