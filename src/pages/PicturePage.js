import { useSelector } from "react-redux";

import PictureButton from "../components/PictureButton";
import Pictures from "../components/Pictures";
import { StyledPictures, StyledPicturePage } from "../components/styles";

export default function PicturePage() {
  const currentPicture = useSelector(
    (state) => state.currentPictureReducer.start
  );

  return (
    <StyledPicturePage>
      <h1>pictures</h1>
      <StyledPictures>
        <PictureButton />
        <img
          width="300"
          height="200"
          alt={`${Pictures[currentPicture].name}`}
          src={Pictures[currentPicture].image}
        />
        <PictureButton next="next" />
      </StyledPictures>
    </StyledPicturePage>
  );
}
