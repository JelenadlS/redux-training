import { Icon } from "@iconify/react";

import { StyledButton } from "./styles";

export default function PictureButton({ next }) {
  return (
    <StyledButton
      aria-label={`${next ? "next picture" : "previous picture"}`}
      type="button"
    >
      <Icon
        width="35"
        heigth="35"
        icon={`${
          next
            ? "ant-design:arrow-right-outlined"
            : "ant-design:arrow-left-outlined"
        }`}
      />
    </StyledButton>
  );
}
