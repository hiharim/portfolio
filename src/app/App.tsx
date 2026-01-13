import { HashRouter, Route, Routes } from "react-router-dom";
import { CareerPage } from "./pages/CareerPage";
import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </HashRouter>
  );
}