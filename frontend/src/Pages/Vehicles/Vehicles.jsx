import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import {
  CarFront,
  Users,
  Briefcase,
  Snowflake,
  Fuel,
  ShieldCheck,
  BadgeIndianRupee,
} from "lucide-react";
import sedan from "../../assets/images/sedan.jpg";
import innova from "../../assets/images/innova.jpg";
import { Link } from "react-router-dom";


const vehicles = [
  {
    name: "Sedan",
    image: sedan,
    seats: "4 Seats",
    luggage: "3 Bags",
    ac: "AC",
    fuel: "Petrol",
    price: "₹12/km",
    desc: "Comfortable rides for city & outstation travel.",
  },
  {
    name: "SUV",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop",
    seats: "7 Seats",
    luggage: "5 Bags",
    ac: "AC",
    fuel: "Diesel",
    price: "₹18/km",
    desc: "Perfect for family trips and group travel.",
  },
  {
    name: "Innova Crysta",
    image: innova,
    seats: "7 Seats",
    luggage: "6 Bags",
    ac: "Premium AC",
    fuel: "Diesel",
    price: "₹20/km",
    desc: "Premium luxury cab with spacious interiors.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const AttachVehicle = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
 
  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900 py-20 px-6"
    >
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-green-400 uppercase tracking-[5px] text-sm font-semibold">
            Our Fleet
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-4">
            Choose Your Perfect Ride
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
            Affordable rides, premium comfort, and professional drivers —
            crafted for your smooth travel experience.
          </p>
        </Motion.div>

        {/* Vehicle Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {vehicles.map((vehicle, index) => (
            <Motion.div
              key={vehicle.name}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Price */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {vehicle.price}
                </div>

                {/* Vehicle Name */}
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-3xl font-bold text-white">
                    {vehicle.name}
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">{vehicle.desc}</p>
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Users className="text-green-400" size={18} />
                    <span>{vehicle.seats}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase className="text-green-400" size={18} />
                    <span>{vehicle.luggage}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Snowflake className="text-green-400" size={18} />
                    <span>{vehicle.ac}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-300">
                    <Fuel className="text-green-400" size={18} />
                    <span>{vehicle.fuel}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-2 mb-5 text-sm text-gray-400">
                  <ShieldCheck className="text-green-400" size={18} />
                  Professional Driver Included
                </div>

                {/* Button */}
                
                <Motion.button
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 0px 25px rgba(34,197,94,0.5)",
                    
                  }}
                  className="w-full py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold flex items-center justify-center gap-2"
                  
                >
                    <Link to="/booking" className="text-xl">
                             Book Your Ride
                           </Link>
                </Motion.button>
               
              </div>

              {/* Floating Border Effect */}
              <div className="absolute inset-0 rounded-[30px] border border-transparent group-hover:border-green-400/40 transition duration-500" />
            </Motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-gray-300 backdrop-blur-lg">
            <CarFront className="text-green-400" />
            Trusted by 10,000+ Happy Customers Across Tamil Nadu
          </div>
        </Motion.div>
      </div>
      
    </section>
  );
};

export default AttachVehicle;
