import { FaCarSide, FaShuttleVan, FaCheckCircle } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const FarePricing = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-br from-[#eef2f7] to-[#cfd8e7] py-20 px-4 flex flex-col items-center">
      <Motion.div
        className="text-center mb-12"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2, margin: "-100px" }}
      >
        <h2 className="text-5xl font-bold text-indigo-900 mb-3 font-serif tracking-tight">
          Fare Plans That Fit Your Ride
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Transparent. Reliable. Affordable. Whether it’s a short drop or a long
          round trip, we’ve got you covered.
        </p>
      </Motion.div>
      <div className="w-full max-w-6xl rounded-xl backdrop-blur-xl bg-white/60 shadow-2xl overflow-hidden border border-white/40">
        <div className="grid grid-cols-3 bg-gradient-to-r from-indigo-700 to-blue-700 text-white text-lg font-semibold text-center">
          <div className="py-4">Vehicle Type</div>
          <div className="py-4 flex justify-center items-center gap-2">
            <FaCarSide className="text-black text-xl" />
            Sedan
          </div>
          <div className="py-4 flex justify-center items-center gap-2">
            <FaShuttleVan className="text-green-300 text-xl" />
            SUV
          </div>
        </div>

        <Motion.div
          className="grid grid-cols-3 bg-white text-center  text-gray-800 text-md font-medium hover:bg-gray-100 transition"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="py-5">One Way Drop</div>
          <div className="py-5 flex justify-center items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            ₹14 / Km
          </div>
          <div className="py-5 flex justify-center items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            ₹19 / Km
          </div>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-3 bg-gray-50 text-center text-gray-800 text-md font-medium hover:bg-gray-200 transition"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="py-5">Round Trip Per Day</div>
          <div className="py-5 flex justify-center items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            ₹13 / Km
          </div>
          <div className="py-5 flex justify-center items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            ₹18 / Km
          </div>
        </Motion.div>

        <Motion.div
          className="grid grid-cols-3 bg-white text-center text-gray-800 text-md font-medium hover:bg-gray-100 transition"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="py-5">Driver Bata</div>
          <div className="py-5 flex justify-center items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            ₹400
          </div>
          <div className="py-5 flex justify-center items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            ₹400
          </div>
        </Motion.div>
      </div>
    </div>
  );
};

export default FarePricing;
