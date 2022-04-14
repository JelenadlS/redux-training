import { Routes, Route } from "react-router-dom";
import styled from "styled-components";

import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <StyledAppGrid>
      <Navigation />
      <Routes className="App">
        <Route path="/" element={<HomePage />} />
      </Routes>
      <StyledFooter>copyright by xyz</StyledFooter>
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
