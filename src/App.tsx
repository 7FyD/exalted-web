import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import DiscordPage from "./pages/Discord";
import VotePage from "./pages/Vote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/discord" element={<DiscordPage />} />
      <Route path="/vote" element={<VotePage />} />
    </Routes>
  );
}

export default App;
