import React from "react";
import { NavLink } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>ANASAYFAYA HOŞGELDİNİZ !!</h1>
      <NavLink to={"/"}>
        <button>LOGİN</button>
      </NavLink>
    </div>
  );
};
