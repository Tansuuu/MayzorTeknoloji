import React, { useState } from "react";
import { Login } from "../component/Login/Login";

export const LoginPage = () => {
  const [admin, setAdmin] = useState({ email: "" });
  const handleChange = (e) => {
    if (e.target.type === "email") {
      setAdmin({ email: e.target.value });
      localStorage.setItem("admin", JSON.stringify(admin));
    }
  };

  // const handleClick = () => {

  // };

  return <Login onChange={handleChange}></Login>;
};
