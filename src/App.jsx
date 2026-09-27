import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Parents from "./pages/Parents";
import Schools from "./pages/Schools";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
