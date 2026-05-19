import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import {
  CarFront,
  ShieldCheck,
  BadgeDollarSign,
  MapPinned,
  Clock3,
  IndianRupee,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";


const tariffData = [
  {
    id: 1,
    title: "Sedan",
    price: "₹13/km",
    icon: <CarFront size={34} />,
    color: "from-green-500 to-emerald-700",
    features: [
      "Comfortable 4 Seater",
      "AC Included",
      "Fuel Included",
      "Driver Bata Extra",
    ],
  },
  {
    id: 2,
    title: "SUV",
    price: "₹18/km",
    icon: <ShieldCheck size={34} />,
    color: "from-blue-500 to-indigo-700",
    features: [
      "Spacious 7 Seater",
      "Luxury Interior",
      "Extra Luggage Space",
      "Perfect For Family Trips",
    ],
  },
  {
    id: 3,
    title: "Premium",
    price: "₹25/km",
    icon: <BadgeDollarSign size={34} />,
    color: "from-yellow-500 to-orange-600",
    features: [
      "Premium Cars",
      "Professional Drivers",
      "Priority Support",
      "Luxury Ride Experience",
    ],
  },
];

const notes = [
  {
    icon: <MapPinned />,
    text: "Toll fees & interstate permits are extra.",
  },
  {
    icon: <Clock3 />,
    text: "Waiting charge ₹2/min after 30 mins.",
  },
  {
    icon: <IndianRupee />,
    text: "Driver bata ₹300/day for round trips.",
  },
];

const TariffChart = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section className="relative overflow-hidden bg-black text-white py-24 px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-green-400 text-sm">
            Transparent Pricing
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 mb-5">
            Cab Tariff Plans
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Affordable pricing with no hidden charges. Choose your perfect ride
            for city, airport, and outstation travel.
          </p>
        </Motion.div>

        {/* Tariff Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {tariffData.map((item, index) => (
            <Motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: false }}
              whileHover={{
                y: -12,
                scale: 1.02,
                borderColor: "#22c55e",
              }}
              onClick={() => setActiveCard(item.id)}
              className={`relative overflow-hidden rounded-[35px] border cursor-pointer transition-all duration-300 ${
                activeCard === item.id
                  ? "border-white/10"
                  : "border-white/10"
              }`}
            >
              {/* Gradient Header */}
              <div
                className={`bg-gradient-to-r ${item.color} p-8 text-center`}
              >
                <Motion.div
                  animate={{
                    rotate: activeCard === item.id ? [0, 10, -10, 0] : 0,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="w-20 h-20 mx-auto rounded-3xl bg-white/20 flex items-center justify-center mb-5"
                >
                  {item.icon}
                </Motion.div>

                <h2 className="text-3xl font-bold">{item.title}</h2>

                <p className="text-5xl font-extrabold mt-4">{item.price}</p>

                <span className="text-sm opacity-80">Starting Price</span>
              </div>

              {/* Content */}
              <div className="bg-white/5 backdrop-blur-xl p-8">
                <ul className="space-y-4 mb-8">
                  {item.features.map((feature, i) => (
                    <Motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-400" />
                      {feature}
                    </Motion.li>
                  ))}
                </ul>

                <Motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 0px 25px rgba(34,197,94,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-700 font-semibold flex items-center justify-center gap-2"
                  
                  >
                  <ArrowRight size={18} />
                  <Link to="/booking" className="text-xl">
                  Book Now</Link>
                </Motion.button>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Notes Section */}
        <Motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="bg-white/5 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
              <IndianRupee className="text-green-400" size={28} />
            </div>

            <div>
              <h2 className="text-3xl font-bold">Important Notes</h2>
              <p className="text-gray-400">
                Read before confirming your booking
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              <Motion.div
                key={index}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#22c55e",
                }}
                className="bg-black/40 border border-white/10 rounded-3xl p-6 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mb-5">
                  {note.icon}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {note.text}
                </p>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default TariffChart;
