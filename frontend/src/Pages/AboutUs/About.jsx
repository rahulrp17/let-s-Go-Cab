import React from "react";
import { motion as Motion } from "framer-motion";
import {
  ShieldCheck,
  PhoneCall,
  BadgeDollarSign,
  CarFront,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import driver2 from "../../assets/images/driver2.jpg";
const features = [
  {
    icon: <CarFront size={22} />,
    title: "Fast Pickup",
    desc: "Get instant cab booking with professional drivers.",
  },
  {
    icon: <BadgeDollarSign size={22} />,
    title: "Affordable Fare",
    desc: "Transparent pricing without hidden charges.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Safe Journey",
    desc: "Verified drivers and well-maintained vehicles.",
  },
  {
    icon: <PhoneCall size={22} />,
    title: "24/7 Support",
    desc: "Customer support anytime, anywhere.",
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white py-24 px-6 md:px-14">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <Motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Small Tag */}
          <Motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm mb-6"
          >
            🚖 Premium Cab Service
          </Motion.div>

          {/* Heading */}
          <Motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Travel Smarter <br />
            with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Let'sGoCab
            </span>
          </Motion.h1>

          {/* Description */}
          <Motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl"
          >
            Experience reliable, affordable, and comfortable rides with
            professional drivers and modern vehicles. Whether it’s airport
            transfers, city rides, or outstation trips — we make every journey
            smooth and stress-free.
          </Motion.p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 mb-10">
            {features.map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg p-5 rounded-2xl hover:border-green-400/40 transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-blue-500 mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </Motion.div>
            ))}
          </div>

          {/* Button */}
          <Motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(34,197,94,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-3"
          >
            <Link to="/booking" className="text-xl">
              Book Your Ride
            </Link>
            <ArrowRight className="group-hover:translate-x-2 transition-all duration-300" />
          </Motion.button>
        </Motion.div>

        {/* RIGHT IMAGE SECTION */}
        <Motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="relative"
        >
          {/* Main Image */}
          <Motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 shadow-2xl"
          >
            <img
              src={driver2}
              alt="Cab Driver"
              className="w-full h-[650px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Floating Card */}
            <Motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-2xl max-w-xs"
            >
              <h4 className="text-2xl font-bold text-green-400 mb-1">10K+</h4>
              <p className="text-gray-300 text-sm">
                Happy customers trust Let’sGoCab for safe & affordable rides.
              </p>
            </Motion.div>
          </Motion.div>

          {/* Floating Circle */}
          <Motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
            className="absolute -top-10 -right-10 w-32 h-32 border-[10px] border-green-500/20 rounded-full"
          />
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
