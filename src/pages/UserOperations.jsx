import React, { useState, useEffect } from "react";
import { Header } from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";
import { Aside } from "../component/Aside/Aside";
import { User } from "../component/User/User";
import profil1 from "../assets/PROFİL (1).png";
import profil2 from "../assets/PROFİL (2).png";
import profil3 from "../assets/PROFİL (3).png";
import profil4 from "../assets/PROFİL (4).png";
import profil5 from "../assets/PROFİL (5).png";
import profil6 from "../assets/PROFİL (6).png";
import profil7 from "../assets/PROFİL (7).png";
import profil8 from "../assets/PROFİL (8).png";
import profil9 from "../assets/PROFİL (9).png";
import profil10 from "../assets/PROFİL (10).png";

export const UserOperations = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Lale Soylu",
      mail: "lalesoylu@gmail.com",
      tel: "0555 555 55 55",
      foto: profil1,
      status: "Aktif",
    },
    {
      id: 2,
      name: "Haydar Candan",
      mail: "haydar_345@gmail.com",
      tel: "0555 555 55 55",
      foto: profil2,
      status: "Yasaklandı",
    },
    {
      id: 3,
      name: "Akın Peyda",
      mail: "akinpeyda@gmail.com",
      tel: "0555 555 55 55",
      foto: profil3,
      status: "Aktif",
    },
    {
      id: 4,
      name: "Suna Küçük",
      mail: "suna_kck34@gmail.com",
      tel: "0555 555 55 55",
      foto: profil4,
      status: "Aktif",
    },
    {
      id: 5,
      name: "Lale Soylu",
      mail: "lalesoylu@gmail.com",
      tel: "0555 555 55 55",
      foto: profil5,
      status: "Aktif",
    },
    {
      id: 6,
      name: "Haydar Candan",
      mail: "haydar_345@gmail.com",
      tel: "0555 555 55 55",
      foto: profil6,
      status: "Yasaklandı",
    },
    {
      id: 7,
      name: "Akın Peyda",
      mail: "akinpeyda@gmail.com",
      tel: "0555 555 55 55",
      foto: profil7,
      status: "Kısıtlandı",
    },
    {
      id: 8,
      name: "Suna Küçük",
      mail: "suna_kck34@gmail.com",
      tel: "0555 555 55 55",
      foto: profil8,
      status: "Aktif",
    },
    {
      id: 9,
      name: "Lale Soylu",
      mail: "lalesoylu@gmail.com",
      tel: "0555 555 55 55",
      foto: profil9,
      status: "Aktif",
    },
    {
      id: 10,
      name: "Haydar Candan",
      mail: "haydar_345@gmail.com",
      tel: "0555 555 55 55",
      foto: profil10,
      status: "Yasaklandı",
    },
  ]);

  useEffect(() => {
    const users = localStorage.getItem("users");
    setUsers(JSON.parse(users));
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  });

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <Header></Header>
      <User users={users} deleteUser={deleteUser}></User>
      <Aside></Aside>
      <Footer></Footer>
    </div>
  );
};
