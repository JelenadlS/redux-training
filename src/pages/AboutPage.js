import { StyledMain } from "../components/styles";
import { AboutText } from "../components/AboutText";

export default function AboutPage() {
  return (
    <StyledMain aria-label="about page">
      <h1>about us</h1>
      {AboutText.map((detail, index) => {
        return (
          <article key={index} aria-label={detail.title}>
            <h2>{detail.title}</h2>
            <p aria-label="further information">{detail.details}</p>
          </article>
        );
      })}
    </StyledMain>
  );
}
