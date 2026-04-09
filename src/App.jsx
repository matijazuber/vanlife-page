import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/about";
import Home from "./pages/home";
import Vans from "./pages/vans";
import VanInfo from "./pages/vanInfo";
import Layout from "./components/Layout";
import "./server/server";
import Dashboard from "./components/host/Dashboard";
import Income from "./components/host/Income";
import Reviews from "./components/host/Reviews";
import HostLayout from "./components/hostLayout";
import HostVans from "./components/HostVans";
import HostVansDetail from "./pages/hostVansDetail";
import HostVanPricing from "./components/host/HostVanPricing";
import HostVanPhotos from "./components/host/HostVanPhotos";
import HostVanInfo from "./components/host/HostVanInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanInfo />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanInfo></HostVanInfo>}></Route>
              <Route
                path="/host/vans/:id/pricing"
                element={<HostVanPricing />}
              ></Route>
              <Route
                path="/host/vans/:id/photos"
                element={<HostVanPhotos />}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
