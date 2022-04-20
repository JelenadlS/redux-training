import { StyledMain } from "../components/styles";
import { AboutText } from "../components/AboutText";
import { useState } from "react";

export default function AboutPage() {
  const [showDetails, setShowDetails] = useState({});

  function handleShowDetails(thisDetail) {
    setShowDetails((prev) => ({
      ...prev,
      [thisDetail]: !showDetails[thisDetail],
    }));
  }
  console.log(showDetails);
  return (
    <StyledMain aria-label="about page">
      <h1>about us</h1>
      {AboutText.map((detail, index) => {
        return (
          <article key={index} aria-label={detail.title}>
            <h2>{detail.title}</h2>
            <button
              type="button"
              onClick={() => handleShowDetails(detail.title)}
            >
              more
            </button>
            <p
              aria-label="further information"
              hidden={!showDetails[detail.title]}
            >
              {detail.details}
            </p>
          </article>
        );
      })}
    </StyledMain>
  );
}
