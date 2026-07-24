import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD

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
=======
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
import Loader from "./Component/Loader.jsx"
import { useEffect, useState } from "react";
>>>>>>> 9894571c9b6576ed3d4dc88deed232b5e899552a

function App() {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  
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