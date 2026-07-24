import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { motion as Motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { logo5 } from "../../assets/images";

const Navbar = () => {
=======
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { logo5 } from "../../assets/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 9894571c9b6576ed3d4dc88deed232b5e899552a
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/tariff", label: "Tariff Chart" },
    { path: "/vehicles", label: "Vehicles" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
<<<<<<< HEAD
    <Motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50  py-0"
    >
      <div className="">

        <div className="bg-white backdrop-blur-xl pb-6 shadow-xl border overflow-hidden border-gray-200 px-6 py-3 flex justify-between items-center">

          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <img
              src={logo5}
              alt="logo"
              className=" w-27 h-14 rounded-full "
            />

            {/* <div>
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                Let's Go Cab
              </h1>

              <p className="text-xs text-gray-500">
                Premium Cab Service
              </p>
            </div> */}
          </div>

          {/* Desktop Menu */}

          <div className="hidden lg:flex items-center gap-10 font-semibold">

            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative transition-all duration-300 ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}

                    {isActive && (
                      <Motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            <Motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.9,
              }}
              onClick={() => navigate("/signup")}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-500 text-white px-6 py-3 rounded-full shadow-lg"
            >
              Book Now
              <ArrowRight size={18} />
            </Motion.button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <Motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="lg:hidden mt-3 bg-white rounded-3xl shadow-xl p-6"
          >
            <div className="flex flex-col gap-5">

              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-lg ${
                      isActive
                        ? "text-indigo-600 font-bold"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                onClick={() => navigate("/signup")}
                className="bg-gradient-to-r from-indigo-600 to-violet-500 text-white rounded-full py-3 mt-3"
              >
                Book Now
              </button>

            </div>
          </Motion.div>
        )}

      </div>
    </Motion.nav>
=======
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
>>>>>>> 9894571c9b6576ed3d4dc88deed232b5e899552a
  );
};

export default Navbar;