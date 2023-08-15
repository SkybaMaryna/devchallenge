import { Routes, Route } from "react-router-dom";
import "./App.css";
import Buttons from "./pages/Buttons/Buttons";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Buttons />} />
    </Routes>
  );
}

export default App;
