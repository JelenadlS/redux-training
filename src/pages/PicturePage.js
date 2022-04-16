import { useSelector } from "react-redux";

import Button from "../components/Button";
import Pictures from "../components/Pictures";
import { StyledPictures } from "../components/styles";

export default function PicturePage() {
  const currentPicture = useSelector(
    (state) => state.currentPictureReducer.start
  );

  return (
    <StyledPictures>
      <Button />
      <img
        width="300"
        height="200"
        alt={`${Pictures[currentPicture].name}`}
        src={Pictures[currentPicture].image}
      />
      <Button next="next" />
    </StyledPictures>
  );
}
