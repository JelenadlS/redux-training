import { useState } from "react";

import Button from "../components/Button";
import Pictures from "../components/Pictures";
import { StyledPictures } from "../components/styles";

export default function PicturePage() {
  const [currentPicture, setCurrentPicture] = useState(0);

  return (
    <StyledPictures>
      <Button
        prev="prev"
        setCurrentPicture={setCurrentPicture}
        currentPicture={currentPicture}
      />
      <img
        width="200"
        height="150"
        alt={`${Pictures[currentPicture].name}`}
        src={Pictures[currentPicture].image}
      />
      <Button
        next="next"
        setCurrentPicture={setCurrentPicture}
        currentPicture={currentPicture}
      />
    </StyledPictures>
  );
}
