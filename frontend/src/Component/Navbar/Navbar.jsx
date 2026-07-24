import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { logo5 } from "../../assets/images";

const Navbar = () => {
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
  );
};

export default Navbar;