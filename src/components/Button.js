import { Icon } from "@iconify/react";
import { StyledButton } from "../components/styles";
import Pictures from "../components/Pictures";

export default function Button({
  next,
  prev,
  currentPicture,
  setCurrentPicture,
}) {
  const arrayLength = Pictures.length;
  const nextPicture = () => {
    setCurrentPicture((prevPic) => prevPic + 1);
  };

  const prevPicture = () => {
    setCurrentPicture((prevPic) => prevPic - 1);
  };

  return (
    <StyledButton
      type="button"
      onClick={next ? nextPicture : prevPicture}
      disabled={currentPicture === (next ? arrayLength - 1 : arrayLength - 9)}
    >
      <Icon
        width="35"
        heigth="35"
        icon={`${
          (next && "ant-design:arrow-right-outlined") ||
          (prev && "ant-design:arrow-left-outlined")
        }`}
      />
    </StyledButton>
  );
}
