import React, { useEffect, useState } from "react";
import "./Edit.css";
import { MdArrowBackIos } from "react-icons/md";
import profil2 from "../../assets/PROFİL2.png";
import { HiUserCircle } from "react-icons/hi";
import { ImBin } from "react-icons/im";
import { NavLink } from "react-router-dom";
// import { UserContext } from "../../contexts/UserContext";

export const Edit = ({ id }) => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const users = localStorage.getItem("users");
    setUsers(JSON.parse(users));
  }, []);

  // users.id.map((user) => {
  //   user === "id" ? console.log(id) : console.log("boş");
  // });

  return (
    <div className="edit">
      <div>
        <div className="back-key">
          <NavLink to={"/user"}>
            <MdArrowBackIos className="back-icon"></MdArrowBackIos>
          </NavLink>
          <p className="user-name">Kullanıcı_isim</p>
        </div>
        <div className="user-container">
          <div>
            <div className="circle-icon">
              <HiUserCircle></HiUserCircle>
            </div>
            <img src={profil2} alt="profil-foto" />
          </div>
          <div className="form">
            <div>
              <label className="form-text">Adı-Soyadı</label>
              <br />
              <input className="form-input" type="text" placeholder="isim" />
            </div>
            <div>
              <label className="form-text">Telefon</label>
              <br />
              <input className="form-input" type="number" placeholder="tel" />
            </div>
            <div>
              <label className="form-text">E-mail</label>
              <br />
              <input className="form-input" type="mail" placeholder="mail" />
            </div>
            <div>
              <label className="form-text">Doğum Tarihi</label>
              <br />
              <input className="form-input" type="date" placeholder="tarih" />
            </div>
          </div>
        </div>
      </div>
      <div className="edit-button">
        <div className="clear-button">
          <ImBin></ImBin>
          <button className="clear">Hesabı Sil</button>
        </div>
        <div className="update-button">
          <button className="update">Hesabı Güncelle</button>
        </div>
      </div>
    </div>
  );
};
