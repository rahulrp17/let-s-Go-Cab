import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Booking from "./Component/Booking_Form/Booking";
import Login from "./Component/Login/Login";
import About from "./Pages/AboutUs/About";
import TariffChart from "./Pages/Tariff_Chart/TariffChart";
import AttachVehicle from "./Pages/Vehicles/Vehicles";
import ContactUs from "./Pages/Contact_Us/ContactUs";
import ScrollProgress from "./Component/ScrollProgress";
import ScrollToTopHandler from "./Component/ScrollToTopHandler";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopHandler />

      <ScrollProgress />

      <div className="pt-24 md:pt-16 lg:pt-16">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/tariff" element={<TariffChart />} />
          <Route path="/vehicles" element={<AttachVehicle />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;