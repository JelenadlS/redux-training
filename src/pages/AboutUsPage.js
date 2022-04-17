import { useSelector } from "react-redux";
import { AboutText } from "../components/AboutText";
import AboutButton from "../components/AboutButton";
import { StyledAbout } from "../components/styles";

export default function AboutUsPage() {
  const showMoreInfo = useSelector(
    (state) => state.showMoreInfoReducer.showMoreInfo
  );

  return (
    <StyledAbout>
      <h1>about us</h1>
      {AboutText.map((detail, index) => {
        return (
          <article key={index}>
            <p>{detail.title}</p>
            <AboutButton detail={detail} />
            {showMoreInfo[detail.title] && <p>{detail.details}</p>}
          </article>
        );
      })}
    </StyledAbout>
  );
}
