import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import { StyledAppGrid } from "./components/styles";
import Footer from "./components/Footer";

function App() {
  return (
    <StyledAppGrid className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </StyledAppGrid>
  );
}

export default App;
