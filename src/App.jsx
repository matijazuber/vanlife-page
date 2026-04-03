import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./footer";
import Vans from "./pages/vans";
import VanInfo from "./pages/vanInfo";

import "./server/server";

function App() {
  return (
    <BrowserRouter>
      <div className="headerDiv">
        <Link
          style={{
            lineHeight: "40px",
            fontSize: "25px",
            verticalAlign: "middle",
            fontFamily: "Inter",
            fontWeight: "900",
            color: "black",
            textDecoration: "none",
          }}
          to="/"
        >
          #VANLIFE
        </Link>
        <div
          style={{
            display: "flex",
            fontFamily: "Inter",
            fontWeight: "600",
            lineHeight: "23px",
            gap: "30px",
          }}
        >
          <Link className="about-header" to="/about">
            About
          </Link>
          <Link className="vans-header" to="/vans">
            Vans
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
