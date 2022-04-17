import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Navigation from "./components/Navigation";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import PicturePage from "./pages/PicturePage";

function App() {
  return (
    <StyledAppGrid>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/picture" element={<PicturePage />} />
        <Route path="/aboutUs" element={<AboutUsPage />} />
      </Routes>
      <StyledFooter aria-label="footer">copyright by xyz</StyledFooter>
    </StyledAppGrid>
  );
}

export default App;

const StyledAppGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr 48px;
  justify-items: center;
`;

const StyledFooter = styled.footer`
  align-self: end;
`;
