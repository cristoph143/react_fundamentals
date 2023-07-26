import "./App.css";
// import List from "./List";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import List from "./List";
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<List />} />
      <Route path="/create" element={<Create />} />
      <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
