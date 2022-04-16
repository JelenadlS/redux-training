import { useState } from "react";
import { Icon } from "@iconify/react";
import Pictures from "../components/Pictures";
import { StyledPictures, StyledButton } from "../components/styles";

export default function PicturePage() {
  const arrayLength = Pictures.length;
  const [currentPicture, setCurrentPicture] = useState(0);

  const nextPicture = () => {
    setCurrentPicture((prevPic) => prevPic + 1);
  };

  const prevPicture = () => {
    setCurrentPicture((prevPic) => prevPic - 1);
  };

  return (
    <StyledPictures>
      <StyledButton
        type="button"
        onClick={prevPicture}
        disabled={currentPicture === arrayLength - 9}
      >
        <Icon icon="ant-design:arrow-left-outlined" />
      </StyledButton>
      <img
        width="200"
        height="150"
        alt={`${Pictures[currentPicture].name}`}
        src={Pictures[currentPicture].image}
      />
      <StyledButton
        type="button"
        onClick={nextPicture}
        disabled={currentPicture === arrayLength - 1}
      >
        <Icon icon="ant-design:arrow-right-outlined" />
      </StyledButton>
    </StyledPictures>
  );
}
