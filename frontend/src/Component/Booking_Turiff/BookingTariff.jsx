import React, { useState, useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import {
  CarIcon,
  BadgeDollarSignIcon,
  ScrollTextIcon,
  CalendarDaysIcon,
  TimerIcon,
  BriefcaseIcon,
  IndianRupeeIcon,
} from "lucide-react";

// Define tab details and content
const tabs = [
  {
    label: "Base Fare",
    icon: <CarIcon className="text-green-500" />,
    included: "Includes fuel, driver allowance, and maintenance charges depending on your travel duration and distance.",
    calculation: "Base fare = (Per km rate × Assigned km/day) + applicable driver & permit charges.",
  },
  {
    label: "Driver Allowance",
    icon: <BadgeDollarSignIcon className="text-green-500" />,
    included: "Driver allowance is ₹300 per day for round trips. For drop trips over 400 km, it becomes ₹600.",
    calculation: "Driver charges = No. of days × ₹300 (or ₹600 based on distance).",
  },
  {
    label: "State Permit",
    icon: <ScrollTextIcon className="text-green-500" />,
    included: "State permit and toll charges are extra and depend on the route and states crossed during the journey.",
    calculation: "Permit cost = Applicable inter-state fees based on your route.",
  },
];

const BookingTariff = () => {
  const [activeTab, setActiveTab] = useState("Base Fare");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  // Find content based on active tab
  const selectedTab = tabs.find((tab) => tab.label === activeTab);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full py-14 px-6 bg-gradient-to-br from-white to-slate-100"
    >
      <Motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center text-green-700 mb-2 tracking-tight">
          Booking Tariff & Charges
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Plan your ride easily with transparent and affordable pricing.
          <br />
          Or call us at{" "}
          <span className="text-green-700 font-semibold">9342830199</span> to get a quick estimate.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {tabs.map((tab) => (
            <Motion.button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition border ${
                activeTab === tab.label
                  ? "bg-green-100 text-green-700 border-green-500 shadow-md"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
            >
              {tab.icon}
              {tab.label}
            </Motion.button>
          ))}
        </div>

        {/* Dynamic Tab Content */}
        <div className="grid md:grid-cols-2 gap-10 mb-14">
          <Motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-6 rounded-3xl shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">What’s Included?</h3>
            <p className="text-gray-600">{selectedTab?.included}</p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white p-6 rounded-3xl shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">How We Calculate</h3>
            <p className="text-gray-600">{selectedTab?.calculation}</p>
          </Motion.div>
        </div>

        {/* Static Notes Section */}
        <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200">
          <h3 className="text-2xl font-bold text-green-800 mb-4">Note</h3>
          <ul className="space-y-4 text-gray-700 text-[15px]">
            <li className="flex items-start gap-2">
              <ScrollTextIcon className="text-green-600 w-5 h-5 mt-1" />
              Toll Fees and Inter-State Permits are extra. Driver Bata is ₹300/day (Round Trips).
            </li>
            <li className="flex items-start gap-2">
              <IndianRupeeIcon className="text-green-600 w-5 h-5 mt-1" />
              <strong>Drop Trips</strong> – Driver Bata ₹300 (₹600 for over 400 km).
            </li>
            <li className="flex items-start gap-2">
              <CarIcon className="text-green-600 w-5 h-5 mt-1" />
              <strong>Round Trips</strong> – Minimum 250 km/day. Bengaluru: 300 km/day.
            </li>
            <li className="flex items-start gap-2">
              <CarIcon className="text-green-600 w-5 h-5 mt-1" />
              <strong>Drop Trips</strong> – Minimum 130 km/day.
            </li>
            <li className="flex items-start gap-2">
              <CalendarDaysIcon className="text-green-600 w-5 h-5 mt-1" />
              1 Day = Calendar Day (Midnight to Midnight)
            </li>
            <li className="flex items-start gap-2">
              <TimerIcon className="text-green-600 w-5 h-5 mt-1" />
              Waiting Charges: ₹2/min. First 30 mins for food are exempt.
            </li>
            <li className="flex items-start gap-2">
              <BriefcaseIcon className="text-green-600 w-5 h-5 mt-1" />
              Max Luggage: Sedan – 3 suitcases, SUV – 4 suitcases.
            </li>
          </ul>
        </div>
      </Motion.div>
    </section>
  );
};

export default BookingTariff;
