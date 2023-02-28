import React from "react";
import "./User.css";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
// import { AiOutlineInfoCircle } from "react-icons/ai";

export const User = ({ users, deleteUser }) => {
  return (
    <div className="user-operations">
      <table className="users">
        <thead>
          <tr className="table-head">
            <th>#</th>
            <th>Ad-Soyad</th>
            <th>E-mail</th>
            <th>Telefon</th>
            <th>Durum</th>
            <th>İşlem</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr className="table-body" key={i}>
              <td>{i + 1}</td>
              <td className="table-foto">
                <img src={user.foto} alt="profil-foto" />
                <p>{user.name}</p>
              </td>
              <td>{user.mail}</td>
              <td>{user.tel}</td>
              <td>
                <div className={`status-${user.status}`}>{user.status}</div>
                {/* <div>
                <AiOutlineInfoCircle
                  className={user.status == "Kısıtlandı" ? "" : "status-icon"}
                ></AiOutlineInfoCircle>
              </div> */}
              </td>
              <td className="table-icons">
                <NavLink to={`/edit/${user.id}`} className="table-icons">
                  <VscEdit></VscEdit>
                </NavLink>
                <RiDeleteBin6Line
                  onClick={() => deleteUser(user.id)}
                  className="icon"
                ></RiDeleteBin6Line>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
