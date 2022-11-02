import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Register from "./components/Register";

function App() {
  return (
    <div className="select-none">
      <Router>
        <Routes>
          <Route path="/" element={<><Home /></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path="/register" element={<><Register /></>} />
          <Route path="/pricing" element={<><Navbar /><Pricing /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
