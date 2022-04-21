import { Icon } from "@iconify/react";
import { StyledButton } from "./styles";

export default function PictureButton({ next }) {
  return (
    <StyledButton>
      <Icon
        width="35"
        height="35px"
        icon={`${
          next
            ? "ant-design:arrow-right-outlined"
            : "ant-design:arrow-left-outlined"
        }`}
      />
    </StyledButton>
  );
}
