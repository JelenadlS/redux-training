import { useSelector } from "react-redux";
import { AboutText } from "../components/AboutText";
import AboutButton from "../components/AboutButton";
import { StyledAbout } from "../components/styles";

export default function AboutUsPage() {
  const showMoreInfo = useSelector(
    (state) => state.showMoreInfoReducer.showMoreInfo
  );

  return (
    <StyledAbout aria-label="about page">
      <h1>about us</h1>
      {AboutText.map((detail, index) => {
        return (
          <article key={index} aria-label={detail.title}>
            <h2>{detail.title}</h2>
            <AboutButton detail={detail} />
            {showMoreInfo[detail.title] && (
              <p aria-label="further information">{detail.details}</p>
            )}
          </article>
        );
      })}
    </StyledAbout>
  );
}
