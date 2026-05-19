// src/context/AppContext.js
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [CustomerData, setCustomerData] = useState(null);
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  // 🔧 Replace with your actual backend URL
  const backendUrl = "http://localhost:8080";

  const getCustomerData = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/Customer/auth/CustomerData`, {
        withCredentials: true,
      });
      setCustomerData(res.data);
    } catch (err) {
      console.error("User fetch failed:", err);
      setCustomerData(null);
    }
  };

  useEffect(() => {
    // Optionally check login status on app load
    getCustomerData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        backendUrl,
        isLoggedIn,
        setIsLoggedIn,
        CustomerData,
        getCustomerData,
        isAccountCreated,
        setIsAccountCreated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
