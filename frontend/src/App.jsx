import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Booking from "./Component/Booking_Form/Booking.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import About from "./Pages/AboutUs/About.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import StickyContactIcons from "./Pages/Home/FloatingIcons.jsx";
import Login from "./Component/Login/Login.jsx";
import TariffChart from "./Pages/Tariff_Chart/TariffChart.jsx";
import AttachVehicle from "./Pages/Vehicles/Vehicles.jsx";
import ContactUs from "./Pages/Contact_Us/ContactUs.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/signUp" element={<Login />} /> {/* ✅ Add Login route */}
        <Route path="/about" element={<About />} /> {/* ✅ Add AboutUs route */}
        <Route path="/tariff" element={<TariffChart />} /> {/* ✅ Add TariffChart route */}
        <Route path="/vehicles" element={<AttachVehicle />} /> {/* ✅ Add AttachVehicle route */}
        <Route path="/contact" element={<ContactUs />} /> {/* ✅ Add ContactUs route */}
      </Routes>

      <Footer />
      {/* <ScrollToTop /> */}
    </BrowserRouter>
  );
}

export default App;
