import React from "react";
import { Header } from "../component/Header/Header";
import { Footer } from "../component/Footer/Footer";
import { Aside } from "../component/Aside/Aside";
import { Edit } from "../component/Edit/Edit";

export const EditPage = () => {
  const id = window.location.pathname.replace("/edit/", "");

  return (
    <div>
      <Header></Header>
      <Edit id={id}></Edit>
      <Aside></Aside>
      <Footer></Footer>
    </div>
  );
};
