import { StyledMain, StyledPictures } from "../components/styles";
import Pictures from "../components/Pictures";
import PictureButton from "../components/PictureButton";
import { useSelector } from "react-redux";

export default function PicturePage() {
  const currentPicture = useSelector(
    (state) => state.currentPictureReducer.startingIndex
  );
  return (
    <StyledMain aria-label="picture page">
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
    </StyledMain>
  );
}
