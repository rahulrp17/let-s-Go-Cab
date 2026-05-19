import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

// IMPORT IMAGES
import hero8 from "../assets/images/hero8.jpg";
import hero9 from "../assets/images/hero9.jpg";
import hero10 from "../assets/images/hero10.jpg";
import hero11 from "../assets/images/hero11.jpg";

const images = [hero9, hero10, hero11, hero8];

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
      
      {/* Background Slider */}
      <AnimatePresence>
        <Motion.div
          key={bgIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[bgIndex]})`,
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        
        {/* Title */}
        <Motion.h1
          className="text-6xl md:text-8xl font-black text-blue-300 drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]"
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Let's Go Cab
        </Motion.h1>

        {/* Subtitle */}
        <Motion.p
          className="mt-5 text-lg md:text-2xl italic font-semibold text-gray-200"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Reliable. Affordable. Everywhere.
        </Motion.p>

        {/* Button */}
        <Motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
          }}
        >
          <Link to="/booking">
            <Motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 25px rgba(99,102,241,0.8)",
              }}
              whileTap={{ scale: 0.9 }}
              className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-lg font-bold shadow-2xl"
            >
              Book Now
            </Motion.button>
          </Link>
        </Motion.div>
      </div>
    </div>
  );
};

export default Hero;
