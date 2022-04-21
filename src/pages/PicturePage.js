import PictureButton from "../components/PictureButton";
import { StyledMain, StyledPictures } from "../components/styles";
import Pictures from "../data/Pictures";

export default function PicturePage() {
  return (
    <StyledMain>
      <h1>pictures</h1>
      <StyledPictures>
        <PictureButton />
        <img
          width="300px"
          height="200px"
          alt={`${Pictures[0].name}`}
          src={`${Pictures[0].image}`}
        />
        <PictureButton next="next" />
      </StyledPictures>
    </StyledMain>
  );
}
