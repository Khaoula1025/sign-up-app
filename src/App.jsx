import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddStagiaire from "./components/Stagiaire/AddStagiaire";
import ListStagiaire from "./components/Stagiaire/ListStagiaire";
import DetailStagiaire from "./components/Stagiaire/DetailStagiaire";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ListStagiaire />} />
        <Route path="/:nom" element={<DetailStagiaire />} />
        <Route path="/add" element={<AddStagiaire />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
