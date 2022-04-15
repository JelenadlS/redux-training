import Pictures from "../components/Pictures";
import { StyledScroll } from "../components/styles";

export default function PicturePage() {
  return (
    <StyledScroll>
      <div>Pictures</div>
      {Object.entries(Pictures).map((picture, index) => {
        console.log(picture);
        return (
          <img
            width="200"
            height="150"
            key={index}
            alt={`${picture[0]}`}
            src={picture[1]}
          />
        );
      })}
    </StyledScroll>
  );
}
