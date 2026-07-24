import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";

import { PiMapPinFill } from "react-icons/pi";
import logo5 from "../../assets/images/logo5.png"; // update path as needed
 // replace with your logo path

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">

        {/* Logo & Contact */}
        <div>
          <img src={logo5} alt="Logo" className="w-20 mb-4 object-cover" />
          <div className="text-sm leading-relaxed">
            <p className="flex items-start gap-2">
              <PiMapPinFill className="mt-1 text-green-400" />
             1/86 AMBALAKARA STREET, NEHRU PLAY GROUND,<br />
              VENGAIMANDALAM, TRICHY, Tamil Nadu - 621005
            </p>
            <p className="flex items-center gap-2 mt-3 text-green-400"><FaPhoneAlt /> +91 934830199</p>
            <p className="flex items-center gap-2 mt-1 text-green-400"><FaEnvelope /> support@letsgocab.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">Popular Routes</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Chennai to Bangalore</li>
            <li>Chennai to Madurai</li>
            <li>Madurai to Rameshwaram</li>
            <li>Coimbatore to Salem</li>
            <li>Trichy to Chennai</li>
          </ul>
        </div>

        {/* Airport Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">Airport Transfers</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Chennai Airport Taxi</li>
            <li>Bangalore Airport Taxi</li>
            <li>Coimbatore Airport Taxi</li>
            <li>Trichy Airport Taxi</li>
            <li>Madurai Airport Taxi</li>
          </ul>
        </div>

        {/* Policies and Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-green-400">Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cancellation Policy</li>
            <li>Disclaimer</li>
            <li>FAQs</li>
          </ul>
          <div className="flex gap-3 mt-5 text-white text-xl">
            <FaFacebookF className="hover:text-green-400 cursor-pointer" />
            <FaTwitter className="hover:text-green-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-green-400 cursor-pointer" />
            <FaInstagram className="hover:text-green-400 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-700 pt-5 text-sm text-center font-semibold text-gray-400">
        &copy; 2025 <span className="text-green-400 font-medium">LET'S GO CAB INDIA PVT LTD</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
