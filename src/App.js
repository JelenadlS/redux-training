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
    </StyledAppGrid>
  );
}

export default App;

const StyledAppGrid = styled.div`
  display: grid;
  grid-template-rows: 48px auto 48 px;
  justify-items: center;
`;
