import { useSelector } from "react-redux";

import PictureButton from "../components/PictureButton";
import { StyledMain, StyledPictures } from "../components/styles";
import Pictures from "../data/Pictures";

export default function PicturePage() {
  const currentPicture = useSelector(
    (state) => state.changePictureReducer.initialIndex
  );
  return (
    <StyledMain>
      <h1>pictures</h1>
      <StyledPictures>
        <PictureButton />
        <img
          width="300px"
          height="200px"
          alt={`${Pictures[currentPicture].name}`}
          src={`${Pictures[currentPicture].image}`}
        />
        <PictureButton next="next" />
      </StyledPictures>
    </StyledMain>
  );
}
