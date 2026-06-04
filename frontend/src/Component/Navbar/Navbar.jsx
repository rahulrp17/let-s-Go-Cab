import React, { useState } from "react";
import "./Navbar.css";
import { logo5 } from "../../assets/images";
import { NavLink, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountCreated] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/tariff", label: "Tariff Chart" },
    { path: "/vehicles", label: "Vehicles" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <Motion.div
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 0.2, type: "spring", stiffness: 100 }}
      className="navbar bg-white shadow-2xl top-0 left-0 w-full  fixed z-50 bottom-160 overflow-hidden"
    >
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <div className="logo flex items-center flex-col">
          <img
            src={logo5}
            alt="Let's Go Cab logo"
            className="w-28 h-18 rounded-full"
          />
        </div>

        {/* Toggle button - visible on small screens */}
        <button
          className="md:hidden text-3xl text-gray-700 cursor-pointer pr-3"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center text-lg font-bold">
          {menuItems.map(({ path, label }) => (
            <Motion.div
              whileHover={{
                scale: 1.1,
                originX: 0.5,
                transition: { duration: 0.3 },
              }}
              key={path}
              className="mx-4"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "text-gray-600 hover:text-blue-800"
                }
              >
                {label}
              </NavLink>
            </Motion.div>
          ))}

          {/* Login/Signup button */}
          <div
            className="bg-indigo-100 text-gray-700 border border-indigo-800 hover:bg-indigo-600 hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300 cursor-pointer flex items-center gap-2"
            onClick={() => navigate(isAccountCreated ? "/login" : "/signup")}
          >
            {isAccountCreated ? "Login" : "Sign Up"}
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <Motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            type: "spring",
            delay: 0.2,
            stiffness: 100,
          }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-blue-100 flex flex-col gap-3 mt-4 text-lg font-semibold items-center pb-4"
        >
          {menuItems.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 border-b-4 border-blue-800"
                  : "text-gray-700 pl-2 hover:text-blue-800"
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Login/Signup button for mobile */}
          <div
            className="bg-transparent text-gray-800 border border-gray-800 hover:bg-gray-800 hover:text-white font-semibold py-2 px-4 rounded-full transition duration-300 cursor-pointer flex items-center gap-2"
            onClick={() => navigate(isAccountCreated ? "/login" : "/signUp")}
          >
            {isAccountCreated ? "Login" : "Sign Up"}
            <ArrowRight className="w-5 h-5" />
          </div>
        </Motion.div>
      )}
    </Motion.div>
  );
};

export default Navbar;
