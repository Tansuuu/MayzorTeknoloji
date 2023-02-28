import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo-dark1.png";
import user from "../../assets/user.png";
import { GoSettings } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const data = localStorage.getItem("admin");
    setData(JSON.parse(data).email);
  }, []);

  return (
    <div className="header">
      <div className="logo-bar">
        <NavLink to={"/home"}>
          <img className="logo" src={logo} alt="mayzor-logo" />
        </NavLink>
      </div>
      <nav>
        <ul className="nav">
          <li>
            <AiOutlineSearch className="nav-search"></AiOutlineSearch>
            <input className="header-input" type="text" />
          </li>
          <li>
            <GoSettings className="setting-icon"></GoSettings>
          </li>
          <li>
            <AiOutlineBell className="bell-icon"></AiOutlineBell>
          </li>
          <li>
            <img src={user} alt="profil-foto" width={"35px"} />
          </li>
          <li className="text">{data}</li>
          <li>
            <AiOutlineDown style={{ color: "#3B82F6" }}></AiOutlineDown>
          </li>
        </ul>
      </nav>
    </div>
  );
};
