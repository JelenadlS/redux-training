import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { StyledAppGrid } from "./components/styles";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <StyledAppGrid>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </StyledAppGrid>
  );
}

export default App;
