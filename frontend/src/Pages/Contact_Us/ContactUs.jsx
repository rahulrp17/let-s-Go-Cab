import React, { useRef } from "react";
import { motion as Motion, useInView } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Send,
  MessageCircle,
} from "lucide-react";

const ContactUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900 min-h-screen py-24 px-6"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <Motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-green-400 uppercase tracking-[4px] text-sm font-semibold">
            Contact Let’sGoCab
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-white mt-4">
            Get In Touch
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
            Need a cab instantly or planning your next trip?  
            Reach out to our support team anytime — we’re available 24/7.
          </p>
        </Motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <Motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {[
              {
                icon: <Phone size={26} />,
                title: "Call Us",
                value: "+91 99436 91718",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: <Mail size={26} />,
                title: "Email Address",
                value: "support@letsgocab.com",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: <MapPin size={26} />,
                title: "Office Location",
                value: "Coimbatore, Tamil Nadu",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: <Clock3 size={26} />,
                title: "Working Hours",
                value: "24/7 Available",
                color: "from-purple-500 to-pink-600",
              },
            ].map((item, index) => (
              <Motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  scale: 1.03,
                  borderColor: "#22c55e",
                }}
                className="group flex items-center gap-5 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">{item.value}</p>
                </div>
              </Motion.div>
            ))}

            {/* Floating Info */}
            <Motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="text-green-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Quick Response
                  </h3>

                  <p className="text-gray-400">
                    Usually replies within minutes
                  </p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Our support team is always ready to help you with bookings,
                pricing, trip planning, and travel assistance.
              </p>
            </Motion.div>
          </Motion.div>

          {/* RIGHT SIDE FORM */}
          <Motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 md:p-10 shadow-2xl">
              <h2 className="text-3xl font-bold text-white mb-2">
                Send Message
              </h2>

              <p className="text-gray-400 mb-8">
                Fill out the form below and our team will contact you shortly.
              </p>

              <form className="space-y-6">
                {/* Name */}
                <Motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
                  />
                </Motion.div>

                {/* Email */}
                <Motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
                  />
                </Motion.div>

                {/* Phone */}
                <Motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition"
                  />
                </Motion.div>

                {/* Message */}
                <Motion.div whileFocus={{ scale: 1.01 }}>
                  <label className="text-sm text-gray-300 mb-2 block">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-green-500 transition resize-none"
                  />
                </Motion.div>

                {/* Button */}
                <Motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 0px 25px rgba(34,197,94,0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send Message
                </Motion.button>
              </form>
            </div>

            {/* Floating Circle */}
            <Motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              className="absolute -top-10 -right-10 w-32 h-32 border-[10px] border-green-500/20 rounded-full"
            />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;