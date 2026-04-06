import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Footer from "./footer";
import Vans from "./pages/vans";
import VanInfo from "./pages/vanInfo";
import Layout from "./components/Layout";
import "./server/server";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Reviews from "./components/host/Reviews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanInfo />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
