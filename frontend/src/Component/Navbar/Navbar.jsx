import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { logo5 } from "../../assets/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/tariff", label: "Tariff Chart" },
    { path: "/vehicles", label: "Vehicles" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <Motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
        className="fixed top-0 left-0 w-full bg-white shadow-lg z-50"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img
                src={logo5}
                alt="Let's Go Cab"
                className="w-24 md:w-28 object-contain"
              />
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 font-semibold">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition-all duration-300 ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full flex items-center gap-2"
              >
                Sign Up
                <ArrowRight size={18} />
              </Motion.button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden"
            >
              {isOpen ? (
                <X size={30} className="text-gray-700" />
              ) : (
                <Menu size={30} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <Motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t shadow-lg"
            >
              <div className="flex flex-col items-center py-5 gap-5">
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-indigo-600 font-semibold"
                        : "text-gray-700"
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}

                <Motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/signup");
                  }}
                  className="bg-indigo-600 text-white px-5 py-2 rounded-full flex items-center gap-2"
                >
                  Sign Up
                  <ArrowRight size={18} />
                </Motion.button>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </Motion.nav>

      {/* Space for Fixed Navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
