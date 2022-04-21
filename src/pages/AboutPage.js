import { StyledMain } from "../components/styles";
import { AboutText } from "../data/AboutText";

export default function AboutPage() {
  return (
    <StyledMain>
      <h1>About</h1>
      {AboutText.map((text, index) => {
        return (
          <section key={index}>
            <h2>{text.title}</h2>
            <p aria-label="further info">{text.details}</p>
          </section>
        );
      })}
    </StyledMain>
  );
}
