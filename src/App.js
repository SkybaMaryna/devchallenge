import { Routes, Route } from "react-router-dom";
import "./App.css";
import Buttons from "./pages/Buttons/Buttons";
import Inputs from "./pages/Inputs/Inputs";
import Home from "./pages/Home/Home";
import Layout from "./pages/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="buttons" element={<Buttons />} />
      <Route path="inputs" element={<Inputs />} />
      </Route>
    </Routes>
  );
}

export default App;
