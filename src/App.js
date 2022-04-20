import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import PicturePage from "./pages/PicturePage";
import { StyledAppGrid } from "./components/styles";
import Footer from "./components/Footer";

function App() {
  return (
    <StyledAppGrid className="App">
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
