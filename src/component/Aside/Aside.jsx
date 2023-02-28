import React, { useEffect, useState } from "react";
import "./Aside.css";
import user from "../../assets/user.png";
import { NavLink } from "react-router-dom";
import { FiPower } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineUserAdd } from "react-icons/ai";

export const Aside = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const data = localStorage.getItem("admin");
    setData(JSON.parse(data).email);
  }, []);

  return (
    <div className="aside">
      <div className="aside-head">
        <div>
          <img src={user} alt="profil-foto" width={"50px"} />
        </div>
        <div>
          <p className="user-mail">{data}</p>
          <p className="user">Yönetici</p>
        </div>
        <div>
          <NavLink to={"/"}>
            <FiPower className="power-icon"></FiPower>
          </NavLink>
        </div>
      </div>
      <div className="aside-nav">
        <div>
          <div className="nav">
            <p>Navigasyon</p>
            <IoIosArrowUp className="icon"></IoIosArrowUp>
          </div>
          <div className="nav-text">
            <AiOutlineAppstore className="outline-icon"></AiOutlineAppstore>
            <NavLink to={"/home"} className="text">
              <p>Anasayfa</p>
            </NavLink>
          </div>
        </div>
        <div>
          <div className="nav">
            <p>APPS</p>
            <IoIosArrowUp className="icon"></IoIosArrowUp>
          </div>
          <div className="nav-text nav-text2">
            <AiOutlineUserAdd className="user-icon"></AiOutlineUserAdd>
            <NavLink to={"/user"} className="text">
              <p>Kullanıcı İşlemleri</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
