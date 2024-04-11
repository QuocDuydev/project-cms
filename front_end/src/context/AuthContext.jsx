import React, { createContext, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("jwt") ? jwtDecode(localStorage.getItem("jwt")) : null
  );
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        "http://localhost:1337/api/auth/local",
        {
          identifier: e.target.email.value,
          password: e.target.password.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.jwt));
        localStorage.setItem("jwt", JSON.stringify(data));
        alert("Login Successfully!");
        navigate("/");
      } else {
        alert("Login failed !");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed");
    }
  };
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  const contextData = {
    user: user,
    loginUser: loginUser,
    authTokens: authTokens,
    logoutUser: logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
