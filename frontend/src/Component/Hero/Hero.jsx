import React, { useEffect, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

// Use either public path or imported images from /src/assets
const images = [
  // "/src/assets/images/hero1.jpg",
  // "/src/assets/images/hero2.jpg",
  // "/src/assets/images/hero3.jpg",
  // "/src/assets/images/hero4.jpg",
  // "/src/assets/images/hero5.jpg",
  // "/src/assets/images/hero6.jpg",
  // "/src/assets/images/hero7.jpg",
  // "/src/assets/images/hero8.jpg",
  "/src/assets/images/hero9.jpg",
  "/src/assets/images/hero10.jpg",
  "/src/assets/images/hero11.jpg",
  "/src/assets/images/hero8.jpg",
];

const Hero = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-175 overflow-hidden">

      <AnimatePresence>
        <Motion.div
          key={bgIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${images[bgIndex]})`,
            zIndex: -1,
          }}
        />
      </AnimatePresence>


      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <Motion.h1
          className="text-7xl title md:text-8xl font-bold drop-shadow-xl  tracking-tight text-shadow-lg text-blue-300 font-serif text-shadow-blue-700   "
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          Let's Go Cab
        </Motion.h1>
        <Motion.p
          className="mt-4 text-xl drop-shadow italic font-bold"
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1, }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Reliable. Affordable. Everywhere.
        </Motion.p>
        <Motion.button
          className="mt-6 px-6 py-3 bg-indigo-700 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.1 ,color:"white" ,}}
          whileTap={{ scale: 0.85 }}
          initial={{y:500,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:1,delay:0.5,ease:"easeInOut",type:"spring"}}
        >
          <Motion.div>
           <Link to="/booking">Book Now</Link>
          </Motion.div>
        </Motion.button>
      </div>
    </div>
  );
};

export default Hero;
