import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import { StyledAppGrid } from "./components/styles";

function App() {
  return (
    <StyledAppGrid className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </StyledAppGrid>
  );
}

export default App;
