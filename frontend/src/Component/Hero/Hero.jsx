import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  CarFront,
  MapPin,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const Hero = () => {
  return (
    <section className="relative min-h-screen pt-10 bg-white overflow-hidden flex items-center">

      {/* Background Decorations */}

      <Motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-70"
      />

      <Motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-70"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}

        <Motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold">
            🚖 Trusted Cab Booking Service
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-slate-900">
            Travel
            <span className="text-indigo-600"> Smart</span>
            <br />
            with
            <span className="text-blue-600"> Let's Go Cab</span>
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Book local rides, airport transfers and outstation taxis with
            verified drivers. Comfortable rides, transparent pricing and
            24/7 support.
          </p>

          <div className="flex gap-5 mt-10 flex-wrap">

            <Link to="/booking">
              <Motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 35px rgba(79,70,229,.35)"
                }}
                whileTap={{ scale: .95 }}
                className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center gap-2"
              >
                Book Now
                <ArrowRight size={20}/>
              </Motion.button>
            </Link>

            <Link to="/tariff">
              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: .95 }}
                className="px-8 py-4 rounded-full border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition"
              >
                Tariff Chart
              </Motion.button>
            </Link>

          </div>

          {/* Statistics */}

          <div className="grid grid-cols-3 gap-8 mt-16">

            <div>
              <h2 className="text-3xl font-bold text-indigo-600">50K+</h2>
              <p className="text-gray-500">Happy Riders</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-600">24×7</h2>
              <p className="text-gray-500">Support</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-indigo-600">4.9★</h2>
              <p className="text-gray-500">Customer Rating</p>
            </div>

          </div>

        </Motion.div>

        {/* RIGHT */}

        <Motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, delay: .3 }}
          className="relative flex justify-center"
        >

          <Motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-[35px] shadow-2xl border border-gray-100 p-8 w-full max-w-md"
          >

            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Why Choose Us?
            </h2>

            {[
              {
                icon: <ShieldCheck size={24} />,
                title: "Safe Journey",
                desc: "Verified professional drivers"
              },
              {
                icon: <Clock3 size={24} />,
                title: "24/7 Availability",
                desc: "Book anytime"
              },
              {
                icon: <MapPin size={24} />,
                title: "Live Tracking",
                desc: "Track your trip easily"
              },
              {
                icon: <CarFront size={24} />,
                title: "Premium Vehicles",
                desc: "Clean & comfortable rides"
              }
            ].map((item,index)=>(
              <Motion.div
                key={index}
                whileHover={{x:8}}
                className="flex items-center gap-5 mb-5 p-4 rounded-2xl hover:bg-indigo-50 transition"
              >

                <div className="w-14 h-14 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-bold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {item.desc}
                  </p>
                </div>

              </Motion.div>
            ))}

            <Motion.div
              whileHover={{scale:1.03}}
              className="mt-8 bg-indigo-600 rounded-3xl p-6 text-white flex items-center justify-between"
            >

              <div>
                <h3 className="text-2xl font-bold">
                  Trusted Service
                </h3>

                <p className="text-indigo-100">
                  Thousands of successful trips.
                </p>
              </div>

              <Star size={40} fill="white"/>

            </Motion.div>

          </Motion.div>

        </Motion.div>

=======
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
>>>>>>> 9894571c9b6576ed3d4dc88deed232b5e899552a
      </div>

    </section>
  );
};

export default Hero;