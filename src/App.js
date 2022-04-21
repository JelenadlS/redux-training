import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { StyledAppGrid } from "./components/styles";
import AboutPage from "./pages/AboutPage";

import HomePage from "./pages/HomePage";
import PicturePage from "./pages/PicturePage";

function App() {
  return (
    <StyledAppGrid>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pictures" element={<PicturePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </StyledAppGrid>
  );
}

export default App;
