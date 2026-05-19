import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

import hero8 from "../../assets/images/hero8.jpg";
import hero9 from "../../assets/images/hero9.jpg";
import hero10 from "../../assets/images/hero10.jpg";
import hero11 from "../../assets/images/hero11.jpg";

const images = [hero8, hero9, hero10, hero11];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      
      <AnimatePresence mode="wait">
        <Motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[bgIndex]})`,
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

        <Motion.h1
          className="text-6xl md:text-8xl font-bold text-blue-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let's Go Cab
        </Motion.h1>

        <Motion.p
          className="mt-4 text-xl md:text-2xl italic font-semibold"
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Reliable. Affordable. Everywhere.
        </Motion.p>

        <Motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.7,
            type: "spring",
          }}
        >
          <Link to="/booking">
            <button className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
              Book Now
            </button>
          </Link>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
