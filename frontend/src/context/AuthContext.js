import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // This should only be inside components

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid Token:", error);
        logout();
      }
    }
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    setUser(jwtDecode(token));
    navigate("/dashboard"); // Ensure this is inside a Router
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/"); // Ensure this is inside a Router
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
