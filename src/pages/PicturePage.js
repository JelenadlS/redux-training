import { StyledMain, StyledPictures } from "../components/styles";
import Pictures from "../components/Pictures";

export default function PicturePage() {
  return (
    <StyledMain aria-label="picture page">
      <h1>pictures</h1>
      <StyledPictures>
        <button />
        <img
          width="300"
          height="200"
          alt={`${Pictures[0].name}`}
          src={Pictures[0].image}
        />
        <button next="next" />
      </StyledPictures>
    </StyledMain>
  );
}
