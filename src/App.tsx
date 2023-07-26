import "./App.css";
// import List from "./List";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import List from "./List";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
