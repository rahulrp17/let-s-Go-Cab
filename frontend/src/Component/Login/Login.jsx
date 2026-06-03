import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo5 from "../../assets/images/logo5.png";
import axios from "axios";
import AppContext from "../../Context/Context";
import { toast } from "react-toastify";
import { motion as Motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import "./Login.css";

const Login = () => {
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { backendUrl, setIsLoggedIn, getUserData, setIsAccountCreated } =
    useContext(AppContext);

  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    axios.defaults.withCredentials = true;
    setLoading(true);

    try {
      if (isCreateAccount) {
        const response = await axios.post(
          `${backendUrl}/customer/auth/register`,
          {
            name,
            email,
            password,
          }
        );

        if (response.status === 201) {
          navigate("/");
          setIsAccountCreated(true);
          toast.success("Account created successfully");
        } else {
          toast.error("Email already exists");
        }
      } else {
        const response = await axios.post(`${backendUrl}/customer/auth/login`, {
          email,
          password,
        });

        if (response.status === 200) {
          setIsLoggedIn(true);
          navigate("/");
          getUserData();
          toast.success("Login successful");
        } else {
          toast.error("Email or password is incorrect");
          setIsLoggedIn(false);
        }
      }
    } catch (error) {
      console.error("Login/Register Error:", error);
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      setIsLoggedIn(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 overflow-hidden loginBg">
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-xl w-full max-w-110 p-6 mb-8 "
      >
        <Link to="/" className="flex items-center justify-center gap-3 mb-2">
          <img src={logo5} alt="logo" className="w-25 h-12 rounded-full" />
          <span className="text-2xl font-bold text-indigo-700"></span>
        </Link>

        <h2 className="text-center text-2xl font-bold text-indigo-700 mb-1">
          {isCreateAccount ? "Create Account" : "Welcome Back !"}
        </h2>
        <p className="text-center text-indigo-400 mb-6 text-sm">
          {isCreateAccount
            ? "Join us and start booking cabs effortlessly."
            : "Please login to continue."}
        </p>

        <form onSubmit={onSubmitHandler} className="space-y-4">
          {isCreateAccount && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="mt-1 w-full px-3 py-1 border border-gray-300 rounded-md"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 w-full px-3 py-1 border border-gray-300 rounded-md"

              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="mt-1 w-full px-3 py-1 border border-gray-300 rounded-md"
              placeholder="********"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="agree"
              className="cursor-pointer"
              required
            />
            <label htmlFor="agree" className="text-sm">
              Check me out
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 rounded-md transition"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" /> Loading...
              </>
            ) : isCreateAccount ? (
              "Sign Up"
            ) : (
              "Login"
            )}
          </button>

          <div className="text-right">
            <Link
              to="/reset-password"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="text-center mt-4">
            {isCreateAccount ? (
              <p>
                Already have an account?{" "}
                <span
                  className="text-indigo-600 hover:underline cursor-pointer"
                  onClick={() => setIsCreateAccount(false)}
                >
                  Login
                </span>
              </p>
            ) : (
              <p>
                Don’t have an account?{" "}
                <span
                  className="text-indigo-600 hover:underline cursor-pointer"
                  onClick={() => setIsCreateAccount(true)}
                >
                  Sign Up
                </span>
              </p>
            )}
          </div>
        </form>
      </Motion.div>
    </div>
  );
};

export default Login;
