import React, { useState, useRef } from "react";
import { FaCarSide, FaRetweet, FaMapMarkerAlt } from "react-icons/fa";
import { motion as Motion } from "framer-motion";
import { toast } from "react-toastify";
import axios from "axios";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import "./Booking.css";

const Booking = () => {
  const [currentState, setCurrentState] = useState("One Way");
  const url = window.location.origin;

  const [data, setData] = useState({
    location: "",
    destination: "",
    datetime: "",
    days: "",
  });

  const locationRef = useRef(null);
  const destinationRef = useRef(null);

  const handlePlaceSelect = (type) => {
    const place = type === "location" ? locationRef.current.getPlace() : destinationRef.current.getPlace();
    if (place && place.formatted_address) {
      setData((prevData) => ({
        ...prevData,
        [type]: place.formatted_address,
      }));
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    const newUrl = `${url}/booking/${currentState === "One Way" ? "oneWayTrip" : "roundTrip"}`;
    try {
      const res = await axios.post(newUrl, data);
      if (res.data.status) {
        toast.success(res.data.message);
        setData({ location: "", destination: "", datetime: "", days: "" });
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      toast.error("Booking failed!");
      console.error(err);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      libraries={["places"]}
    >
      <div className="h-175 bg-image flex items-center justify-center overflow-hidden">
        <Motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-6 max-w-100  mx-auto rounded text-white -mt-10 bg-transparent  bg-opacity-50 backdrop-blur-lg backdrop-filter shadow-2xl"
        >
          {/* Button Toggle */}
          <div className="flex border-b-2 border-indigo-500  mb-6">
            <Motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentState("One Way")}
              className={`flex items-center w-1/2 cursor-pointer gap-2 px-6 py-2 font-semibold transition-all duration-200 ${
                currentState === "One Way"
                  ? "bg-indigo-500 text-white"
                  : "text-black hover:bg-gray-100"
              }`}
            >
              <FaCarSide />
              One Way
            </Motion.button>
            <Motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentState("Round Trip")}
              className={`flex items-center w-1/2 cursor-pointer gap-2 px-6 py-3 font-semibold transition-all duration-200 ${
                currentState === "Round Trip"
                  ? "bg-indigo-500 text-white"
                  : "text-black hover:bg-gray-200"
              }`}
            >
              <FaRetweet />
              Round Trip
            </Motion.button>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleBooking}
            className="grid md:grid-cols-1 gap-4 items-end"
          >
            {/* Pickup Location */}
            <Motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              <label className="text-sm font-medium">Picking Up Location:</label>
              <div className="relative mt-1">
                <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <Autocomplete
                  onLoad={(autoC) => (locationRef.current = autoC)}
                  onPlaceChanged={() => handlePlaceSelect("location")}
                >
                  <input
                    type="text"
                    name="location"
                    value={data.location}
                    onChange={handleChange}
                    placeholder="Enter a Location"
                    className="w-full border-1 px-10 py-2 rounded placeholder:text-white"
                  />
                </Autocomplete>
              </div>
            </Motion.div>

            {/* Drop Location */}
            <Motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
              <label className="text-sm font-medium">Dropping off Location:</label>
              <div className="relative mt-1">
                <FaMapMarkerAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
                <Autocomplete
                  onLoad={(autoC) => (destinationRef.current = autoC)}
                  onPlaceChanged={() => handlePlaceSelect("destination")}
                >
                  <input
                    type="text"
                    name="destination"
                    value={data.destination}
                    onChange={handleChange}
                    placeholder="Enter a Location"
                    className="w-full border-1 px-10 py-2 rounded placeholder:text-white"
                  />
                </Autocomplete>
              </div>
            </Motion.div>

            {/* Date and Time */}
            <Motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
              <label className="text-sm font-medium">Picking Up Time:</label>
              <input
                type="datetime-local"
                name="datetime"
                value={data.datetime}
                onChange={handleChange}
                className="w-full border-1 px-3 py-2 rounded mt-1 placeholder:text-white"
              />
            </Motion.div>

            {/* Days for Round Trip */}
            {currentState === "Round Trip" && (
              <Motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <label className="text-sm font-medium">Number of Days:</label>
                <input
                  type="number"
                  name="days"
                  value={data.days}
                  onChange={handleChange}
                  placeholder="e.g., 3"
                  className="w-full border px-3 py-2 rounded mt-1 placeholder:text-white"
                />
              </Motion.div>
            )}

            {/* Submit Button */}
            <Motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-indigo-500 cursor-pointer text-white px-6 py-2 rounded hover:bg-indigo-500 transition-all col-span-full md:col-span-1"
            >
              Submit
            </Motion.button>
          </form>
        </Motion.div>
      </div>
    </LoadScript>
  );
};

export default Booking;
